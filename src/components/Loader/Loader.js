import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class ImageLoader extends Component {
  render() {
    return <Loader className="Loader" type="Oval" color="#303f9f" height={80} width={80} />;
  }
}

export default ImageLoader;
