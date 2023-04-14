export const Modal = ({ image }) => (
  <div class="overlay">
  <div class="modal">
    <img src={image.largeImageURL} alt="" />
  </div>
</div>
)