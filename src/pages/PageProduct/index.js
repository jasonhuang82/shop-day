import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.scss";

class PageProduct extends Component {


    componentDidMount() {
        console.log('match',this.props.match);
        
    }
    render () {
        return (
            <div className="PageProduct">PageProduct</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageProduct)


