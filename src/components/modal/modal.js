import React from 'react';
import { ModalWrapper } from './modal.styles';
import { connect } from 'react-redux';
import { hideModal, showModal } from '../../store/actions';

const Modal = (props) => {
    const closeModal = () => {
        props.hideModal();
    }
    return (
        <ModalWrapper onClick={() => closeModal()} show={props.show_modal}>
            {props.modalElement}
        </ModalWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: () => dispatch(showModal()),
		hideModal: () => dispatch(hideModal())
	};
};

const mapStateToProps = (state) => {
	return {
		show_modal: state.showModal,
		modalElement: state.modalElement,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

