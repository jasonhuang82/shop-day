import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.scss";

class PageFooter extends Component {


    componentDidMount() {
        console.log('match',this.props.match);
        
    }
    render () {
        return (
            <footer className="PageFooter">PageFooter</footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageFooter)


