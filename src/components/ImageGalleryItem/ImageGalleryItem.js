import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  state = { imageOpen: false };

  onClickImage = () => {
    this.setState({ imageOpen: true });
  };

  onClickListImage = () => {
    if (this.state.imageOpen) {
      this.setState({ imageOpen: false });
    }
  };

  render() {
    return (
      <li onClick={this.onClickListImage} className={css.imageGalleryItem}>
        <img
          onClick={this.onClickImage}
          className={css.imgItem}
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
        />
        {this.state.imageOpen && (
          <Modal srcModal={this.props.imgAltBig} altModal={this.props.imgAlt} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
