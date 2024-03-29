import React from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav/navbar_container";
import BusinessShowCSS from "../../stylesheets/business_show.css";
import MapIndex from "../map/map_index";
import BusinessShowPhotos from './business_show_photos';
import ReviewContainer from "../review/review_container";


class BusinessShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businessData: {},
      testImages: [
        "https://s3-media0.fl.yelpcdn.com/bphoto/UzrNIkdGTZ1-cXuQDsKUmA/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/Gb2XQgCm_Nz1uHMl8CuhuQ/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/5SCcuSSC7_ivmRFR3i_l5A/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/L86ElZwBriULwCqaemB5gw/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/VzVjR_JpC2Rr3DnuNvwePg/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/59C7YiFTPLBCiIZsqRUAGA/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/OZt17s2S0T_Fr_Haw-N8sA/o.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/px4ZjOgY51ZUEimUnIGJGA/o.jpg",
      ],
      businessPhotos: []
    };

    this.plusSlides = this.plusSlides.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchBusiness(this.props.businessId)
      .then(businessData => 
        this.setState({ businessData: businessData.business.data })
      );

    this.props.fetchBusinessPhotos(this.props.businessId)
      .then(businessPhotos => 
        this.setState({ businessPhotos: businessPhotos.businessPhotos.data})
      );
  }

  plusSlides(e) {
    let images = this.state.businessPhotos;
    if (e.target.className === 'next') {
      for (let i = 0; i < 4; i++) {
        images.push(images.shift());
      };
      this.setState({ businessPhotos: images });
    } else {
      for (let i = 4; i > 0; i--) {
        images.unshift(images.pop());
      };
      this.setState({ businessPhotos: images });
    };
  };

  render() {
    console.log(this.state.businessPhotos)
    const style = {
      width: "28vw",
      height: "36vh"
    };
    const {
      name,
      category,
      address,
      city,
      state,
      zipcode,
      hours,
      phone,
      price_range
    } = this.state.businessData;

    return (
      <div className="business-show-container">
        <NavBarContainer />
        <div className="middle">
          <div className="images">
            <ul className="business-show-ul">
              <div className="business-show-prev-container">
                <a className="prev" onClick={this.plusSlides}>&#10094;</a>
              </div>
              {this.state.businessPhotos.slice(0, 4).map(photoData => <BusinessShowPhotos photoD={photoData} photo={photoData.photoURL} date={photoData.date} allPhotos={this.state.businessPhotos} business={this.props.business.name} uploader={photoData.uploaderUsername}/>)}
              <div className="business-show-next-container">
                <a className="next" onClick={this.plusSlides}>&#10095;</a>
              </div>
            </ul>
          </div>
          <div>
            <div className="business-info">
              <div className="left-side">
                <p className="business-name">{name}</p>
                <img
                  className="review-stars"
                  src="/static/images/review-stars.png"
                />
                <p className="price-range"> {price_range}</p>
                <div className="write-add">
                  <button className="add-review" onClick={() => this.props.history.push(`/businesses/${this.props.businessId}/writereview`)}>
                    <i className="fas fa-star"></i>Write a Review
                  </button>
                  <button className="add-photo" onClick={() => this.props.history.push(`/businesses/${this.props.businessId}/upload`)}>
                    <i className="fas fa-camera"></i>Add Photo
                  </button>
                </div>
                <div className="location-hours">
                  <div className="left-map">
                    <div className="header">
                      <p>Location & Hours</p>
                    </div>
                    <div className="map-info">
                      <MapIndex
                        style={style}
                        stores={[this.state.businessData]}
                      />
                      <p className="address">{address}</p>
                      <p className="city">
                        {city}, {state} {zipcode}
                      </p>
                    </div>
                  </div>
                  <div className="right-hours">
                    <p className="time">
                      <span className="day">Mon</span>
                      <span>{hours ? hours.mon : ""}</span>
                    </p>
                    <p className="time">
                      <span className="day">Tue </span>
                      {hours ? hours.tue : ""}
                    </p>
                    <p className="time">
                      <span className="day">Wed</span>
                      {hours ? hours.wed : ""}
                    </p>
                    <p className="time">
                      <span className="day">Thu </span>
                      {hours ? hours.thurs : ""}
                    </p>
                    <p className="time">
                      <span className="day">Fri&nbsp;&nbsp;&nbsp; </span>
                      {hours ? hours.fri : ""}
                    </p>
                    <p className="time">
                      <span className="day">Sat&nbsp;&nbsp;</span>
                      {hours ? hours.sat : ""}
                    </p>
                    <p className="time">
                      <span className="day">Sun&nbsp;&nbsp;</span>
                      {hours ? hours.sun : ""}
                    </p>
                  </div>
                </div>
                <div className="amentities">
                  <div className="amen-header">
                    <p>Amenities</p>
                  </div>
                  <div className="amentities-top">
                    <p>
                      <span>
                        <i className="fas fa-parking"></i>
                      </span>
                      <span> Parking Street </span> Yes
                    </p>
                    <p>
                      <i className="far fa-credit-card"></i>&nbsp; Accepts Credit Cards &nbsp;&nbsp;<span>Yes</span>
                    </p>
                  </div>
                  <div className="amentities-bottom">
                    <p>
                        <i className="fas fa-wifi"></i>&nbsp;Wi-Fi&nbsp;&nbsp;<span>Yes</span>
                    </p>
                    <p>
                      <i className="fas fa-truck"></i>Delivery&nbsp;&nbsp;
                      <span>No</span>
                    </p>
                  </div>
                </div>
                <p className="review-header">Recommended Reviews</p>
                <ReviewContainer businessId={this.props.businessId} />
                 <p className="review-page">Page 1 of 1</p>
              </div>
              <div className="right-side">
                <div className="right-sticky">
                  <p className="business-number">
                    <i className="fas fa-phone-alt"></i> {phone}
                  </p>
                  <p className="business-direction">
                    <a href="https://www.google.com/maps/" className="google-map"><i className="fas fa-directions"></i>Get Directions</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer" onClick={this.closeDisplay}>
          <img className="building" src="/static/images/footer.png" />
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessShow);
