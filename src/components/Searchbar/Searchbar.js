import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import toast, { Toaster } from 'react-hot-toast';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSearchInput = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error(`Please enter search query`);
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <>
        <Toaster />
        <header className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              {/* <span className="button-label">Search </span> */}
              <ImSearch />
            </button>
            <input
              type="text"
              name="name"
              value={this.state.imageName}
              onChange={this.handleSearchInput}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
