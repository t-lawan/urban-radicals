import React, {useState} from "react"
import { connect } from 'react-redux';
import { hideModal, showModal, showModalCarousel } from "../../store/actions";
import { ModalComponentConfig } from "../../utils/component-config";
import { generateImageBlock } from "../../utils/richtext"
import ImageCarousel from "../image-carousel/image-carousel";
import { ImageCollectionItemWrapper, ImageItemWrapper } from "./image-collection-item.styles"


const ImageCollectionItem = (props) => {
	const [ isShowingCarousel, setIsShowingCarousel ] = useState(false);

    const showCarousel = () => {
        const componentProps = {
            imageCollection: props.imageCollection,
            imageIndex: props.imageIndex
        }

        props.showModal(ModalComponentConfig.IMAGE_CAROUSEL, componentProps)
        // props.showModalCarousel(props.imageCollection,props.imageIndex);
    }

    return (
        <ImageCollectionItemWrapper>
            <ImageItemWrapper onClick={()=> showCarousel()}>
                {generateImageBlock(props.imageBlock, props.imageIndex)}
            </ImageItemWrapper>
        </ImageCollectionItemWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: (elem, props) => dispatch(showModal(elem, props)),
		hideModal: () => dispatch(hideModal())
	};
};

const mapStateToProps = (state) => {
	return {
		show_modal: state.showModal,
        modalProps: state.modalProps,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCollectionItem);

