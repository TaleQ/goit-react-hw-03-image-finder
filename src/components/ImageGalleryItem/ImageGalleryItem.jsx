import { GalleryItem, ItemImg } from "./ImageGallertItem.styled";

export const ImageGalleryItem = ({ images, onClick }) => { return images.map(img => (<GalleryItem key={img.id} onClick={onClick}><ItemImg src={img.webformatURL} alt="" /></GalleryItem>)) };