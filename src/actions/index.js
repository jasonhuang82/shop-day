import {
  PERSON_ADD,
  PERSON_DEL,
  LOAD_PHOTO_DATA,
  GET_PRODUCT_DATA,
  CHANGE_ANIMATE_CARD_IMG,
  ADD_TO_CART
} from "@/actions/actionType";

export const addPersonHandle = () => ({
  type: PERSON_ADD
})

export const delPersonHandle = (personID) => ({
  type: PERSON_DEL,
  personID
})

export const loadPhotoDataHandle = (photoData) => ({
  type: LOAD_PHOTO_DATA,
  photoData
})

export const getProductData = () => ({
  type: GET_PRODUCT_DATA
})

// click 加入購物車 更換漂浮卡片
export const changeAnimateCartImg = (productId, productDatas) => ({
  type: CHANGE_ANIMATE_CARD_IMG,
  productId, 
  productDatas
})

// 加入購物車
export const addProductToCart = (product) => ({
  type: ADD_TO_CART,
  product
})