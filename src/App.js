import React, { Component } from 'react';
import Searchbar from './components/Searchbar';

import './App.css';

class App extends Component {
  state = {
    imageName: '',
  };

  // componentDidMount() {}

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}

export default App;
