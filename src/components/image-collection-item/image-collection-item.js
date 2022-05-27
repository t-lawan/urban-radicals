import React, {useState} from "react"
import { connect } from 'react-redux';
import { hideModal, showModal, showModalCarousel } from "../../store/actions";
import { generateImageBlock } from "../../utils/richtext"
import ImageCarousel from "../image-carousel/image-carousel";
import { ImageCollectionItemWrapper, ImageItemWrapper } from "./image-collection-item.styles"


const ImageCollectionItem = (props) => {
	const [ isShowingCarousel, setIsShowingCarousel ] = useState(false);

    const showCarousel = () => {
        props.showModal(<ImageCarousel imageCollection={props.imageCollection} imageIndex={props.imageIndex} />)
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
		showModalCarousel: (imageCollection, index) => dispatch(showModalCarousel(imageCollection, index)),
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

