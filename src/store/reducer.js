import { configureStore } from "@reduxjs/toolkit"
import { ModalElementType } from "../utils/page-config"
import * as ActionTypes from "./actions"
const initalState = {
  showModal: false,
  modalElement: null,
  modalElementType: null,
  modalProject: null,
  modalCarouselImages: [],
  modalCarouselImageIndex: 0
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: true,
        modalElement: action.modalElement,
        modalElementType: null
      })
    case ActionTypes.SHOW_MODAL_PROJECT:
      return Object.assign({}, state, {
        showModal: true,
        modalProject: action.modalProject,
        modalElementType: ModalElementType.PROJECT_PAGE
      })
    case ActionTypes.SHOW_MODAL_CAROUSEL:
        return Object.assign({}, state, {
          showModal: true,
          modalCarouselImages: action.modalCarouselImages,
          modalCarouselImageIndex: action.modalCarouselImageIndex,
          modalElementType: ModalElementType.IMAGE_CAROUSEL
        })
    case ActionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        showModal: false,
        modalElement: null,
        modalCarouselImages: [],
        modalElementType: null

      })

    default:
      return state
  }
}




export const store = () =>
configureStore({reducer: reducer}
  )
