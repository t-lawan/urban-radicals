export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
   
export const showModal = (modalElement, modalProps) => {
    return {
        type: SHOW_MODAL,
        modalElement: modalElement,
        modelElementProps: modalProps
    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}

