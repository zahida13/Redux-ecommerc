export const addItem = (product) => (dispatch) => {
  return dispatch({
    type: "ADD-ITEM",
    payload: {
      product,
    },
  });
};
export const purchaseNow = (products) => (dispatch) => {
  return dispatch({
    type: "PURCHASE-ITEM",
    payload: products,
  });
};

export const searchItem = (title) => (dispatch) => {
  return dispatch({
    type: "SEARCH-ITEM",

    payload: title,
  });
};

export const deleteItem = (id) => (dispatch) => {
  return dispatch({
    type: "DELETE-ITEM",
    payload: id,
  });
};

export const deletePurchaseItem = (id) => (dispatch) => {
  return dispatch({
    type: "DELETE-PURCHASE-ITEM",
    payload: id,
  });
};

export const getPost = () => (dispatch) => {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: "FETCH-DATA",
        payload: post,
      })
    );
};
