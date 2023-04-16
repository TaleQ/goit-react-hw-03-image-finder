import { Component } from 'react';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from 'api/Api';
import { Notify } from 'notiflix';


export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: null,
    isShowModal: false,
    largeImageUrl: ""
  };
  componentDidMount() {}
  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.setState({
        isLoading: true,
      });
      try {
        const data = await fetchImages(searchQuery, page);
        if (data.hits.length === 0) {
          Notify.failure("No images found")
        } else {
          this.setState(prevState => ({
          images: data.hits,
          page: prevState.page + 1,
        }));
        }
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  componentDidCatch(error) {
    console.log(error);
  }
  searchFormSubmit = value => {
    if (value === this.state.searchQuery) {
      Notify.info(`Results for query "${value}" are already shown. Press "Load more" to see more images`)
      return
    }
    this.setState({
      images: [],
      searchQuery: value,
      page: 1,
    });
  };
  openModal = (largeImageUrl) => {
    console.log(largeImageUrl);
    this.setState({
      largeImageUrl: largeImageUrl,
      isShowModal: true
    });
  };
  async loadMoreImg() {
    console.log("btn");
    this.setState({
        isLoading: true,
      });
    try {
        const { searchQuery, page } = this.state;
      const data = await fetchImages(searchQuery, page);
      console.log(data);
      this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));
        // if (data.hits.length === 0) {
        //   Notify.failure("No images found")
        // } else {
          
        // }
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ isLoading: false });
      }
  };
  render() {
    const { images, isLoading, isShowModal, largeImageUrl } = this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.searchFormSubmit}></SearchBar>
        <div>
          {isLoading && <Loader />}
          <ImageGallery>
            {images.length > 0 ? (
              <ImageGalleryItem images={images} onClick={this.openModal} />
            ) : null}
          </ImageGallery>
        </div>
        {images.length > 0 && <Button onClick={this.loadMoreImg.bind(this)}></Button>}
        {isShowModal && <Modal imgUrl={largeImageUrl} />}
      </Wrapper>
    );
  }
}
