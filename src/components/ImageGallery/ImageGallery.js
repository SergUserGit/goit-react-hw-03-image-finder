import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = function ({ images }) {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ webformatURL, tags, id, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgSrc={webformatURL}
          imgAlt={tags}
          imgAltBig={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
