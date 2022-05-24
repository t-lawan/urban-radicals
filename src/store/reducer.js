import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "redux"
import * as ActionTypes from "./actions"
const initalState = {
  showModal: false,
  modalElement: null
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: true,
        modalElement: action.modalElement
      })
    case ActionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        showModal: false,
        modalElement: null
      })

    default:
      return state
  }
}



export const store = () =>
configureStore({reducer: reducer}
  )
