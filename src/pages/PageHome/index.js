import "./style.scss";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import ProductSection from "@/components/ProductSection";

class PageHome extends Component {


  state = {
    
  }
  
  componentDidMount() {
  }
  render () {
    return (
      <div className="PageHome">
        <div className="container">

          {/* 產品列表 組件*/}
          <ProductSection/>
          


        </div>  
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log('state',state);
  
  return {
      // persons: state.persons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // addPerson: () => dispatch(addPersonHandle()),
      // delPerson: (personID) => dispatch(delPersonHandle(personID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)


