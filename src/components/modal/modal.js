import React, { Suspense } from 'react';
import { ModalCloseButton, ModalWrapper } from './modal.styles';
import { connect } from 'react-redux';
import { hideModal } from '../../store/actions';
import { ModalComponentConfig } from '../../utils/component-config';
import ImageCarousel from '../image-carousel/image-carousel';
import Jumbotron from '../jumbotron/jumbotron';

const Modal = (props) => {
    const closeModal = () => {
        props.hideModal();
    }

    let ModalElement;

    switch(props.modalElement) {
        case ModalComponentConfig.IMAGE_CAROUSEL:
            ModalElement = React.lazy(() => import('../image-carousel/image-carousel'));
            break;
        default:
            // ModalElement = (<p></p>);
            break;
    }

    return (
        <ModalWrapper show={props.show_modal}>
            <ModalCloseButton onClick={() => closeModal()}> close </ModalCloseButton>
             {/* <Suspense fallback={<div>Loading...</div>}> */}
             {ModalElement ? <ModalElement {...props.modalProps} /> : null}

             {/* </Suspense> */}
        </ModalWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
	return {
		hideModal: () => dispatch(hideModal())
	};
};

const mapStateToProps = (state) => {
	return {
		show_modal: state.showModal,
		modalElement: state.modalElement,
        modalProps: state.modalProps
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

