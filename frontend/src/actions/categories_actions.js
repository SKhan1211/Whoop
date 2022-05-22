import * as CategoryAPIUtil from "../util/categories_api_util";

export const FETCH_BY_CATEGORY = 'FETCH_BY_CATEGORY'
export const FETCH_ALL_BUSINESSES = 'FETCH_ALL_BUSINESSES'

const receiveByCategories = businesses => ({
  type: FETCH_BY_CATEGORY,
  businesses
});

const receiveAllBusinesses = businesses => ({
  type: FETCH_ALL_BUSINESSES,
  businesses
})

export const fetchByCategory = categoryId => dispatch => (
  CategoryAPIUtil.fetchByCategory(categoryId).then(businesses => (
    dispatch(receiveByCategories(businesses))
  ))
);

export const fetchAllBusinesses = () => dispatch => (
  CategoryAPIUtil.fetchAllBusinesses().then(businesses => (
    dispatch(receiveAllBusinesses(businesses))
  ))
);
