import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../../styles/index.styles"
import { LayoutWrapper, MainWrapper } from "./layout.styles"

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <MainWrapper> {props.children} </MainWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
