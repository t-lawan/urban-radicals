export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const SHOW_MODAL_PROJECT = 'SHOW_MODAL_PROJECT';
export const HIDE_MODAL_PROJECT = 'HIDE_MODAL_PROJECT';

export const SHOW_MODAL_CAROUSEL = 'SHOW_MODAL_CAROUSEL';
export const HIDE_MODAL_CAROUSEL = 'HIDE_MODAL_CAROUSEL';

export const showModalProject = (project) => {
    return {
        type: SHOW_MODAL_PROJECT,
        modalProject: project

    }
}   

export const showModalCarousel = (images, index) => {
    return {
        type: SHOW_MODAL_CAROUSEL,
        modalCarouselImages: images,
        modalCarouselImageIndex: index

    }
}   

export const hideModalProject = () => {

}


export const showModal = (modalElement) => {
    return {
        type: SHOW_MODAL,
        modalElement: modalElement

    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}

