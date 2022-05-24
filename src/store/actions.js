export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';


export const showModal = (modalElement) => {
    console.log("ELE", modalElement)
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

