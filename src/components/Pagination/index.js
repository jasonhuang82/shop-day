import React from 'react';

import './style.scss';

const Pagination = (props) => (
  <div className="Pagination">
    <div className="PaginationPrev">
      <i className="fas fa-chevron-left"></i>
    </div>
    <div className="PaginationPageCount isActive"><span>1</span></div>
    <div className="PaginationPageCount"><span>2</span></div>
    <div className="PaginationPageCount"><span>3</span></div>
    <div className="PaginationPageCount"><span>4</span></div>
    <div className="PaginationPageCount"><span>5</span></div>
    <div className="PaginationNext">
      <i className="fas fa-chevron-right"></i>
    </div>
  </div>
);

export default Pagination;