import React from "react"
import { PageMap } from "../../utils/page-config"
import { NavbarLink, NavbarWrapper } from "./navbar.styles"

const Navbar = () => {
  return (
    <NavbarWrapper>
        <NavbarLink to={PageMap.HOME.slug}> selected projects</NavbarLink>
        <NavbarLink to={PageMap.PROJECTS.slug}> ALL PROJECTS </NavbarLink>
        <NavbarLink to={PageMap.ABOUT.slug}> about</NavbarLink>
    </NavbarWrapper>
  )
}

export default Navbar
