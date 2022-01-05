import { Component } from 'react';
import PropTypes from 'prop-types';
import imageAPI from '../ImageAPI/ImageAPI';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import ImageLoader from '../Loader';

class ImageInfo extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  static propTypes = {
    imageName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1 });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      imageAPI
        .fetchImages(nextName, nextPage)
        .then(newImages => {
          if (newImages.total !== 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...newImages.hits],
              status: 'resolved',
            }));
            return;
          }

          return Promise.reject(new Error('Invalid request'));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status } = this.state;

    if (status === 'idle') {
      return <p className="SearchForm-message">Please enter your search term</p>;
    }

    if (status === 'pending') {
      return <ImageLoader />;
    }

    if (status === 'rejected') {
      return <p className="SearchForm-message">Sorry, something went wrong</p>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={this.state.images} />
          <Button onClick={this.onClickLoadMore} page={this.state.page} />
        </>
      );
    }
  }
}

export default ImageInfo;
