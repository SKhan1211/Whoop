import React from 'react';
import BusinessShowCSS from '../../stylesheets/business_show.css';

class BusinessShowPhotos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      modalPhoto: "",
      selectedPhoto: '',
      selectedPhotoDate: ''
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(event) {
    let date = new Date(event.target.dataset.date).toString().split(" ");
    let dateStr = date[1] + ", " + date[2] + " " + date[3];
    this.setState({ showModal: true, modalPhoto: event.target.src, selectedPhoto: event.target.dataset.key, selectedPhotoDate: dateStr  })

    const container = document.getElementsByClassName('business-show-container')
    if (container.length > 0) {
      container[0].className = 'business-show-container-hidden'
    }
  }

  closeModal(event) {
    if (event.target.className === 'show-full-modal-container' ||
        event.target.className === 'show-close-container' ||
        event.target.className === 'close-modal-text' ||
        event.target.className === 'close-modal') {
      this.setState({ showModal: false, modalPhoto: '', selectedPhoto: '', selectedPhotoDate: '' })
      const container2 = document.getElementsByClassName(
        "business-show-container-hidden"
      );
      if (container2.length > 0) {
        container2[0].className = 'business-show-container'
      }
    }
  }

  render() {
    const postModal = (
      <div className="show-full-modal-container" onClick={this.closeModal}>
        <div className="show-inner-modal-text-container">
          <div className="show-close-container">
            <div className="close-modal-text"><h3 className="close-modal">Close</h3><span className="close-modal">X</span></div>
          </div>
          <div className="show-inner-modal-container">
            <div className="show-left-picture-container">
              <img src={this.state.modalPhoto} alt="uploaded-photo"/>
              <div className="show-left-text-container">
                <div className="left-text-container-positioning">
                  <p>{this.state.selectedPhotoDate}</p>
                  <div className="show-left-divider-bar"></div>
                  <h3>{this.props.uploader}</h3>
                </div>
              </div>
            </div>
            <div className="show-right-pictures-container">
              <div className="show-right-text-container">
                <h1>Photos for {this.props.business}</h1>
              </div>
                <ul className="show-right-photos-list">
                {this.props.allPhotos.map(photo => {
                  let imgClass;
                  photo._id === this.state.selectedPhoto ? imgClass = 'show-right-photos-selected' : imgClass = 'show-picture-holder'
                  return <li className="show-right-photos" key={photo._id}><img className={imgClass} src={photo.photoURL} data-key={photo._id} data-date={photo.date} alt="photo-img" onClick={this.showModal} /></li>}
                )}
                </ul>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <li className="business-show-photo-li">
        <img className="business-show-photo-img" data-key={this.props.photoD._id} data-date={this.props.photoD.date} src={this.props.photo} onClick={this.showModal}/>
        { this.state.showModal ? postModal : null } 
      </li>
    )
  }
}

export default BusinessShowPhotos