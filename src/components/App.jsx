import React, { Component } from 'react';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    imageArray: [],
    loadStatus: false,
    page: 1,
    searchKey: '',
    dataFilled: false,
    countOfPagePagination: 12,
  };

  getApi = (imageName, pageNumber) => {
    return (
      'https://pixabay.com/api/?q=' +
      imageName +
      '&page=' +
      pageNumber +
      '&key=33160634-a3b69315a0080f1036a2567f6&image_type=photo&orientation=horizontal&per_page=' +
      this.state.countOfPagePagination
    );
  };

  getOtherImageCount = (totalHits, pageCount) => {
    return totalHits - pageCount * this.state.countOfPagePagination > 0;
  };

  initDate = data => {
    this.state.page = 1;
    this.setState({ imageArray: [] });
    this.setState({ searchKey: data.imageName });
  };

  setValues = (data, loadMore) => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    if (loadMore) {
      this.setState(prevState => ({
        imageArray: [...prevState.imageArray, ...data.hits],
      }));
    } else {
      this.setState({ imageArray: data.hits });
    }
    this.setState({
      dataFilled: this.getOtherImageCount(data.totalHits, this.state.page),
    });
  };

  processData = (imageName, loadMore) => {
    this.setState({ loadStatus: true });
    const URL = this.getApi(imageName, this.state.page);
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Немає даних по запиту ${imageName}`));
      })
      .then(data => {
        this.setValues(data, loadMore);
      })
      .catch(error => {})
      .finally(() => {
        this.setState({ loadStatus: false });
      });
  };

  formSubmitHandler = data => {
    this.initDate(data);
    this.processData(data.imageName, false);
  };

  buttonLoadClick = data => {
    if (this.state.searchKey.trim() !== '') {
      this.processData(this.state.searchKey, true);
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={this.state.imageArray} />
        {this.state.loadStatus && <Loader />}
        {this.state.dataFilled && <Button onSubmit={this.buttonLoadClick} />}
      </div>
    );
  }
}

export default App;
