import React from 'react';
import cx from 'classnames';
import './style.scss';

const Pagination = ({ currentPage, totlePage, onPageChange, onPrev, onNext}) => {
  
  // 將總頁數轉換成陣列去map
  const producePageCountArray = () => {
    let totalPageCount = [];
    for (let page = 0; page < totlePage; page++) {
      totalPageCount.push(page);
    }
    return totalPageCount
  }
  
  return (
    <div className="Pagination">
      <div 
        className="PaginationPrev"
        onClick={e => onPrev(-1)}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
      { producePageCountArray().map((page,pageIdx) => (
          <div 
            className={cx('PaginationPageCount',{ isActive: page === currentPage })} 
            key={pageIdx}
            onClick={e => onPageChange(page)}
          >
            <span>{page+1}</span>
          </div>
      ))}
      <div 
        className="PaginationNext"
        onClick={e => onNext(1)}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
};

// start from 0
Pagination.defaultProps = {
  totlePage: 4,
  currentPage: 0,
  onPageChange(pageCount) {
    console.log('onPageChange', pageCount);
  },
  onPrev(pageStep){
    console.log('onPrev', pageStep);
  },
  onNext(pageStep){
    console.log('onNext', pageStep);
  }
};

export default Pagination;