import React from 'react';
import styled from "styled-components";
import './style.scss';


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
      <div className="CardPrice CardPriceOrigin">NT$220</div>
      <div className="CardPrice CardPriceDiscount" >NT$220</div>
      <button className="btn btn-red">+加入購物車</button>
    </div>
  </div>
);

// ProductCard.defaultProps = {};

export default ProductCard;