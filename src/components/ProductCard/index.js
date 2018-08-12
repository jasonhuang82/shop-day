import React from 'react';
import styled from "styled-components";
import cx from 'classnames';
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


const ProductCard = ({ title, price, discount, stock,coverUrl,onCartBtnClick }) => (
  <div className="ProductCard isDiscount">
    <div 
      className="CardCover"
      style={{ backgroundImage: `url('${coverUrl}')`}}
    ></div>
    <div className="CardInfos">
      <div className="CardTitle" dangerouslySetInnerHTML={{__html: title}}></div>
      <div className="CardProductInfo">
        <div className={cx('CardPrice',{
          CardPriceLineThrough: discount < 1
        })}>售價 : NT${price}</div>
        <div 
          className="CardPrice CardPriceRed CardPriceDiscount" 
          hidden={discount === 1}
        >
          <div>打折後 : NT${Math.ceil(price * discount)}</div>
          <div>{Math.floor( discount * 10)} 折</div>
        </div>
      </div>
      <CustomButton
        title="+加入購物車"
        className={['btn-info']}
        onClick={onCartBtnClick}
      />
    </div>
  </div>
);

ProductCard.defaultProps = {
  title: '小日子大背包',
  price: 200,
  discount: 1,
  stock: 0,
  coverUrl: 'https://fakeimg.pl/700x700/',
  onCartBtnClick(){
    console.log('onCartBtnClick');
  }
};

export default ProductCard;