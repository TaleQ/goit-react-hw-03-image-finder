import { Component } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    images: []
  };
  componentDidMount() {

  };
  componentDidUpdate() {

  };
  componentDidCatch(error) { 
    console.log(error);
  };
  searchFormSubmit = (value) => {

  };
  openModal = (id) => {

  };
  loadMoreImg = () => {

  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.searchFormSubmit}></SearchBar>
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} onClick={this.openModal}></ImageGalleryItem>
        </ImageGallery>
        {this.state.images.length > 0 && (
          <Button onCLick={this.loadMoreImg}></Button>
        )}
      </>
    )
  }
}
