import './style.scss';
import React,{Component} from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import { TweenMax } from "gsap/TweenMax";
// import productData from '@/assets/json/productData.json';
import { getImgAbsUrl } from '@/config/reUseMethod';
import { filterDropConfig, sortDropConfig } from '@/config/dropDown';

// redux
import { getProductData, changeAnimateCartImg, addProductToCart } from '@/actions';

import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import DropDownLists from '@/components/DropDownLists';
import CustomInput from '@/components/CustomInput';



class ProductSection extends Component {

  state = {
    sortSelectIndex: 0,
    filterSelectIndex: 0,
    productListDatas: [],
    searchText: '',
    currentPageIndex: 0,
    eachPageDataCount:8
  }

  isFinishAddCart = true;

  componentDidMount = () => {    
    this.props.getProductData()
    // 從querystring 取得排序，filter條件若是符合條件就要反映條件到畫面
    // 取得所有資料的key，判斷router進來需不需要做排序
    let queryStr = queryString.parse(this.props.location.search);
    let sortSelectIndex = this.state.sortSelectIndex;
    let filterSelectIndex = this.state.filterSelectIndex;
    let searchText = this.state.searchText;
    let isNeedSort = Object.keys(queryStr).some(query => query === 'sortKey') && Object.keys(queryStr).some(query => query === 'sortValue');
    let isNeedFilter = Object.keys(queryStr).some(query => query === 'filterValue');
    let isNeedSearchText = Object.keys(queryStr).some(query => query === 'searchText');
    // 排序
    if (isNeedSort) sortSelectIndex = this.findMapSortValueIndex(queryStr.sortKey, queryStr.sortValue);
    // 過濾
    if (isNeedFilter) filterSelectIndex = this.findMapFilterValueIndex(queryStr.filterValue);
    // 關鍵字
    if (isNeedSearchText) searchText = queryStr.searchText;

    // 更新資料
    this.setState({
      // productListDatas: productData.product,
      sortSelectIndex,
      filterSelectIndex,
      searchText
    });
  }
  
  // computed
  // 取得要有幾頁
  getTotoalPageCount = () => {
    let { eachPageDataCount} = this.state;
    return Math.ceil(this.processProductDatas().length / eachPageDataCount);
  }

  // click 頁面數字更換頁
  changePagePosition = pageCount =>{
    let currentPageIndex = pageCount;
    if (currentPageIndex >= 0 && currentPageIndex < this.getTotoalPageCount()) {
      this.setState({ currentPageIndex });
    }
  }
  // 上下頁更換頁面
  stepPagePosition = pageStep => {
    let currentPageIndex = this.state.currentPageIndex;
    currentPageIndex += pageStep;
    if (currentPageIndex >= 0 && currentPageIndex < this.getTotoalPageCount()) {
      this.setState({ currentPageIndex });
    }
  }



  // 整理flter下拉資料(string:[])
  mapFilterSelectValue = () => {
    return filterDropConfig.listData.map(items => items.value)
  }

  
  // 取得整理過filter 下拉key,value的陣列資料
  getMapFilterData = () => {
    return this.mapFilterSelectValue()[this.state.filterSelectIndex];
  }
  // 找尋 key 在整理過 filter 物件的Index
  findMapFilterValueIndex = value => {
    let filterIndex = this.mapFilterSelectValue().findIndex(item => item === value);
    return filterIndex === -1 ? 0 : filterIndex;
  }

  // 整理sort下拉資料({key,sort})
  mapSortSelectValue = () => {
    return sortDropConfig.listData.map(items => items.value)
  }

  // 傳入key, sort 找出在sort下拉資料的位置
  findMapSortValueIndex = (key,value)=> {
    let sortIndex = this.mapSortSelectValue().findIndex(sortValue => sortValue.key === key && sortValue.sort === value); 
    sortIndex = sortIndex === -1 ? 0 : sortIndex;
    return sortIndex; 
  }
  // 取得目前整理排序物件
  getMapSortData = () => {
    return this.mapSortSelectValue()[this.state.sortSelectIndex];
  }

  // 將資料記錄到 querystring
  recordDataToQuery = mapQueryObj => {
    const queryStr = queryString.stringify({
      ...queryString.parse(this.props.location.search),
      ...mapQueryObj
    });
    this.props.history.push({
      pathname: '/',
      search: `?${queryStr}`
    });
  }

  // 經過預處理 過濾完排序完搜尋完的資料再丟給切分頁
  processProductDatas = () => {
    // 設定排序規則
    let sortInfo = this.getMapSortData();
    
    const sortFunc = (a, b) => {
      switch (sortInfo.sort) {
        case 'asc':
          return a[sortInfo.key] - b[sortInfo.key];
        case 'desc':
          return b[sortInfo.key] - a[sortInfo.key];
        default:
          return a[sortInfo.key] - b[sortInfo.key];
      }
    };
    const cloneProcust = JSON.parse(JSON.stringify(this.props.productListDatas));
    return cloneProcust
      // 過濾 filter下拉條件
      .filter(product => product.category.indexOf(this.getMapFilterData()) !== -1)
      // 排序 sort 下拉條件
      .sort(sortFunc)
      // 搜尋關鍵字
      .filter(product => {
        let { searchText } = this.state;
        if (searchText.trim() !== '') {
          let str = product.title;
          let reg = new RegExp(searchText.trim(), 'ig');

          // str.match(reg)
          return reg.test(str);
        };
        return true;
      })
      // 將關鍵字加入mark
      .map(product => {
        let { searchText } = this.state;
        if (searchText.trim() !== '') {
          let str = product.title;
          let reg = new RegExp(searchText.trim(), 'ig');
          // 符合的字串
          const [matchStr] = str.match(reg);
          product.title = product.title.replace(matchStr, `<span class='CardMarkText'>${matchStr}</span>`)
        };
        return product;
      });
  }

  renderProductCards = () => {
    let { currentPageIndex, eachPageDataCount } = this.state;
    return this.processProductDatas()
    .slice(currentPageIndex * eachPageDataCount, currentPageIndex * eachPageDataCount + eachPageDataCount)
    // 產生所有符合條件卡片
    .map((product, productIdx) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.pid}>
        {/* 卡片 組件*/}
        <ProductCard 
          title={product.title}
          price={product.price}
          discount={product.discount}
          stock={product.stock}
          coverUrl={getImgAbsUrl(product.coverName)}
          onCartBtnClick={e => {
            const target = e.target;
            // addProductToCart
            if (this.isFinishAddCart === false) return ;
            this.isFinishAddCart = false;
            // 先換圖
            this.props.changeAnimateCartImg(product.pid, this.props.productListDatas);
            // 換完做動畫
            // 購物車彈一下
            TweenMax.from('i.fa-shopping-cart',0.5,{
              scale: 0.3
            });
            // 卡片飛到cart
            
            TweenMax.from('.ProductAnimateCard', 0.8, {
              opacity: 1,
              scale: 1,
              top: `${target.getBoundingClientRect().y}`,
              left: `${target.getBoundingClientRect().x + target.getBoundingClientRect().width / 2}`,
              onComplete: () => {
                this.isFinishAddCart = true;
              }
            });
            // 將click到產品加入cart
            this.props.addProductToCart(product);
          }}
        />
      </div>
    ));
  }

  render() { 
    return (
      <section className="ProductSection">
        {/*<h3 className="ProductSectionTitle">小日子商號</h3>*/}
        <div className="ProductSectionControl mb-5">
          <div className="ProductSearch">
            <CustomInput 
              inputText={this.state.searchText}
              placeholder="請輸入關鍵字"
              onChange={ async(e) => {
                let searchText = e.target.value;
                let searchTextObj = { searchText: searchText };
                await this.setState(searchTextObj);
                this.recordDataToQuery(searchTextObj);
              }}
            />
          </div>
          <ul className="ProductFilter">
              <li>
                <span className="ProductFilterTitle">{filterDropConfig.title} :</span>
                <DropDownLists 
                  selectItemsData={filterDropConfig.listData}
                  selectIndex={this.state.filterSelectIndex}
                  onChange={async (value) => {
                    // onchange 時，把sort資料更新state並記錄到url
                    let filterSelectIndex = this.findMapFilterValueIndex(value);
                    await this.setState({ filterSelectIndex });
                    this.recordDataToQuery({ filterValue: this.getMapFilterData() })
                  }}
                />
              </li>
              <li>
                <span className="ProductFilterTitle">{sortDropConfig.title} :</span>
                <DropDownLists 
                  selectItemsData={sortDropConfig.listData}
                  selectIndex={this.state.sortSelectIndex}
                  onChange={async (value) => {
                    // onchange 時，把sort資料更新state並記錄到url
                    let sortSelectIndex = this.findMapSortValueIndex(value.key, value.sort);
                    await this.setState({ sortSelectIndex });
                    this.recordDataToQuery({ 
                      sortKey: this.getMapSortData().key,
                      sortValue: this.getMapSortData().sort  
                    })
                  }}
                />
              </li>
          </ul>
        </div>
        {this.processProductDatas().length > 0
          ? (
            <div className="ProductSectionShopList">
              <div className="row">
                {this.renderProductCards()}
              </div>
              {/*分頁 組件*/}
              <Pagination
                currentPage={this.state.currentPageIndex}
                totlePage={this.getTotoalPageCount()}
                onPageChange={pageCount => this.changePagePosition(pageCount)}
                onPrev={pageStep => this.stepPagePosition(pageStep)}
                onNext={pageStep => this.stepPagePosition(pageStep)}
              />
            </div>)
          : <h3 className="d-flex justify-content-center align-items-center">找無符合資料</h3>
        }
        
      </section>  
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productListDatas: state.productListDatas
  };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    getProductData: () => dispatch(getProductData()),
    changeAnimateCartImg: (productId, productDatas) => dispatch(changeAnimateCartImg(productId, productDatas)),
    addProductToCart: (product) => dispatch(addProductToCart(product))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSection));