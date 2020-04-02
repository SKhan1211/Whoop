import {
  RECEIVE_BUSINESS,
  RECEIVE_BUSINESS_PHOTO,
  RECEIVE_BUSINESS_PHOTOS
} from "../actions/businesses_actions";
import { FETCH_BY_CATEGORY, FETCH_ALL_BUSINESSES } from '../actions/categories_actions';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return action.business.data
    case FETCH_BY_CATEGORY:
      return Object.assign({}, state, action.businesses)
    case RECEIVE_BUSINESS_PHOTO: // I'm not really using this information...
      return (Object.assign({}, state, action.businessPhoto))
    case RECEIVE_BUSINESS_PHOTOS:
      return (Object.assign({}, state, { photos: action.businessPhotos }))
    case FETCH_ALL_BUSINESSES:
      return (Object.assign({}, state, action.businesses))
    default:
      return state;
  }
};
