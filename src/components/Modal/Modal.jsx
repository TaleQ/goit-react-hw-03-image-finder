import { ModalOverlay, StyledModal, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types'

export const Modal = ({ largeImageURL }) => (
  <ModalOverlay>
    <StyledModal>
      <ModalImg src={largeImageURL} alt="" />
    </StyledModal>
  </ModalOverlay>
);

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired
}