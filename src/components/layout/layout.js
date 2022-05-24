import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../../styles/index.styles"
import { LayoutWrapper, MainWrapper } from "./layout.styles"
import Jumbotron from "../jumbotron/jumbotron"
import Navbar from "../navbar/navbar"
import Modal from "../modal/modal"


const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Modal />
      {props.showJumbotronText ? <Jumbotron /> : null}
      <Navbar />
      <MainWrapper> {props.children} </MainWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showJumbotronText: PropTypes.bool
}

Layout.defaultProps = {
	showJumbotronText: true
};

export default Layout
