import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
export class PhotoList extends Component {

  state = {
    photoData: []
  }
  componentDidMount(){
    this.props.loadPhoto()
  }
  photoList () {
    const ulStyle = {
      "listStyleType": "none",
      "padding": 0,
      "margin": 0
    }
    return(
      <ul style={ulStyle}>
        {
          this.props.photoData.map((photo,i) => (
            <li key={i}>
              <img src={photo.urls.small} style={{ "maxWidth": "100%" }} alt="" />
            </li>
          ))
        }

      </ul>
    );
  }
  render() {
    
    return (
      <div>
        { this.props.photoData.length > 0 ? this.photoList() : <div>資料加載中...</div>  }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photoData: state.photoData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPhoto: () => dispatch({ type: 'GET_PHOTO_DATA_SAGA'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
