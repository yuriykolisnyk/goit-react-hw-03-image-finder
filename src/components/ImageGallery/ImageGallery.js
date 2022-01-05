import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
          key={index}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
