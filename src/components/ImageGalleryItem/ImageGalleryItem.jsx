export const ImageGalleryItem = ({ images, onClick }) => { return images.map(img => (<li key={img.id} onClick={onClick(img.id)}><img src={img.webformatURL} alt="" /></li>)) };