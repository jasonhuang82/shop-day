
import productData from '@/assets/json/productData.json';
import { GET_PRODUCT_DATA} from "@/actions/actionType";
const initState  = [];
export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA:

      return productData.product;
    default:
      return state;
  }
};