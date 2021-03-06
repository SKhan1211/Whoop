import { connect } from "react-redux";
import Search from "./search";
import { fetchByCategory, fetchAllBusinesses } from '../../actions/categories_actions';
import { fetchBusiness, fetchBusinessPhotos } from "../../actions/businesses_actions";

const mapStateToProps = (state, ownProps) => ({
  businessId: ownProps.match.params.business_id,
  businessPhoto: state.business
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchByCategory: categoryId => dispatch(fetchByCategory(categoryId)),
  fetchBusinessPhotos: businessId => dispatch(fetchBusinessPhotos(businessId)),
  fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
