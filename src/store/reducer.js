import { configureStore } from "@reduxjs/toolkit"
import { ModalElementType } from "../utils/page-config"
import * as ActionTypes from "./actions"
const initalState = {
  showModal: false,
  modalElement: null,
  modalProps: {},

}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: true,
        modalElement: action.modalElement,
        modalProps: action.modelElementProps
      })
    case ActionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        showModal: false,
        modalElement: null,
        modalProps: {}

      })

    default:
      return state
  }
}




export const store = () =>
configureStore({reducer: reducer}
  )
