import {
  combineReducers
} from 'redux';
import photoData from './photoState';
import persons from './personState';
import productListDatas from './productListDatasState';
import productAnimateCardIndex from './productAnimateCardState';
import shopCart from './shopCart';

export default combineReducers({
  photoData,
  persons,
  productListDatas,
  productAnimateCardIndex,
  shopCart
})