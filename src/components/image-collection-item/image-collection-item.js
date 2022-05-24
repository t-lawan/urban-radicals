import React, {useState} from "react"
import { connect } from 'react-redux';
import { hideModal, showModal } from "../../store/actions";
import { generateImageBlock } from "../../utils/richtext"
import ImageCarousel from "../image-carousel/image-carousel";
import { ImageCollectionItemWrapper, ImageItemWrapper } from "./image-collection-item.styles"


const ImageCollectionItem = (props) => {
	const [ isShowingCarousel, setIsShowingCarousel ] = useState(false);

    const showCarousel = () => {
        props.showModal((<ImageCarousel />));
    }

    return (
        <ImageCollectionItemWrapper>
            <ImageItemWrapper onClick={()=> showCarousel()}>
                {generateImageBlock(props.imageBlock, props.index)}
            </ImageItemWrapper>
        </ImageCollectionItemWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: (elem) => dispatch(showModal(elem)),
		hideModal: () => dispatch(hideModal())
	};
};

const mapStateToProps = (state) => {
	return {
		show_modal: state.showModal
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCollectionItem);

