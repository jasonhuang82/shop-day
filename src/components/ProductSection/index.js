import './style.scss';
import React,{Component} from 'react';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import DropDownLists from '@/components/DropDownLists';
import CustomInput from '@/components/CustomInput';
import productData from '@/assets/json/productData.json';

// 取得圖片實體path
const getImgAbsUrl = url => require(`../../assets/imgs/${url}.png`);


class ProductSection extends Component {
  state = {
    productData,
    dropDownDatas: [
      {
        id: 'c001',
        title: '分類',
        listData: [
          { title: '全部', value: '' },
          { title: '衣服', value: 'cloth' },
          { title: '杯子', value: 'cup' }
        ]
      },
      {
        id: 'c002',
        title: '排序',
        listData: [
          { title: '價格從低到高', value: { key: 'price',sort:'asc' } },
          { title: '價格從高到低', value: { key: 'price', sort: 'desc' } },
          { title: '最多折扣', value: { key: 'discount', sort: 'desc' } },
          { title: '人氣最多', value: { key: 'price', sort: 'asc' } }
        ]
      }
    ]
  }
  componentDidMount() { 
  }

  renderProductCards = () => {
    
    // return this.state.productData.map();
  }

  render() { 
    return (
      <section className="ProductSection">
        {/*<h3 className="ProductSectionTitle">小日子商號</h3>*/}
        <div className="ProductSectionControl mb-5">
          <div className="ProductSearch">
            <CustomInput />
          </div>
          <ul className="ProductFliter">
            {this.state.dropDownDatas.map(dropDownData => (
              <li key={dropDownData.id}>
                <span className="ProductFliterTitle">{dropDownData.title} :</span>
                <DropDownLists
                  selectItemsData={dropDownData.listData}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3">
            {/* 卡片 組件*/}
            <ProductCard />
          </div>
        </div>
        {/*分頁 組件*/}
        <Pagination/>
      </section>  
    );
  }
}


// const ProductSection = (props) => (
//   <section className="ProductSection">
//     {/*<h3 className="ProductSectionTitle">小日子商號</h3>*/}
//     <div className="ProductSectionFliter">
      
//     </div>
//     <div className="row">
//       <div className="col-6 col-md-4 col-lg-3">
//         {/* 卡片 組件*/}
//         <ProductCard />
//       </div>
//     </div>
//     {/*分頁 組件*/}
//     <Pagination/>
//   </section>  
// );

export default ProductSection;