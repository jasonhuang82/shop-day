import React from 'react';
import styled from "styled-components";
import './style.scss';
import CustomButton from '@/components/CustomButton';

// const CardCover = styled.div`
//   background-size: cover;
//   background-position: 50%;
//   background-repeat: no-repeat;
//   background-image: url('http://via.placeholder.com/500x500');
//   width: 100%;
//   padding-bottom: 40%;
// `;


const ProductCard = (props) => (
  <div className="ProductCard isDiscount">
    <div className="CardCover"></div>
    <div className="CardInfos">
      <div className="CardTitle">小日子大書袋</div>
      <div className="CardProductInfo">
        <div className="CardPrice CardPriceOrigin">售價 : NT$220</div>
        <div className="CardPrice CardPriceDiscount" >打折後 : NT$220</div>
        <div className="CardProductStock">庫存 : 10</div>
      </div>
      <CustomButton
        title="+加入購物車"
        className={['btn-info']}
      />
    </div>
  </div>
);

// ProductCard.defaultProps = {};

export default ProductCard;