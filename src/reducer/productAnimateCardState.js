
import { CHANGE_ANIMATE_CARD_IMG } from "@/actions/actionType";

const initState  =  0;
export default (cartInitState = initState, action) => {
  let cartState = JSON.parse(JSON.stringify(cartInitState));
  switch (action.type) {
    case CHANGE_ANIMATE_CARD_IMG :
      // 利用傳進來的id去 store 整包產品資料找到那包的路徑，最後存回 store 給畫面選img
      // action.productDatas , action.productId
      // cartState.currentProductImgIndex = action.productId;
      let productIndex = action.productDatas.findIndex(prodect => prodect.pid === action.productId);
      productIndex === -1 ? 0 : productIndex;
      // console.log('productIndex',productIndex);
      cartState = productIndex;
      return cartState;
    default:
      return cartInitState;
  }
};