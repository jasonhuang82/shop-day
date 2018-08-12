
import { ADD_TO_CART, DELETE_FROM_CART} from "@/actions/actionType";
const initState  = [];
export default (shopCartInitSate = initState, action) => {
  let shopCartSate = JSON.parse(JSON.stringify(shopCartInitSate));
  switch (action.type) {
    case ADD_TO_CART:
      // 加入click 到產品物件到購物車 傳入 productObj
      shopCartSate.push(action.product);
      return shopCartSate;
    case DELETE_FROM_CART:
      // 加入click 到產品物件到購物車 傳入 productObj
      shopCartSate.splice(action.productIndex,1);
      return shopCartSate;
    default:
      return shopCartInitSate;
  }
};