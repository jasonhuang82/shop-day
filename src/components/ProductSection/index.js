import './style.scss';
import React from 'react';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';


const ProductSection = (props) => (
  <section className="ProductSection">
    <h3 className="ProductSectionTitle">小日子商號</h3>
    <div className="row">
      <div className="col-6 col-md-3">
        {/* 卡片 組件*/}
        <ProductCard />
      </div>

      <div className="col-6 col-md-3">
        {/* 卡片 組件*/}
        <ProductCard/>
      </div>

      <div className="col-6 col-md-3">
        {/* 卡片 組件*/}
        <ProductCard />
      </div>

      <div className="col-6 col-md-3">
        {/* 卡片 組件*/}
        <ProductCard />
      </div>
    </div>
    {/*分頁 組件*/}
    <Pagination/>
  </section>  
);

export default ProductSection;