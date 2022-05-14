import React from "react"
import { PageMap } from "../../utils/page-config"
import { NavbarLink, NavbarWrapper } from "./navbar.styles"
import { useLocation } from '@reach/router';

const Navbar = () => {
	let location = useLocation();
	const isCurrentPage = (page) => {
		let response = false;

		switch (page) {
			case PageMap.HOME.id: {
				response = location.pathname === PageMap.HOME.slug ? true : response;
				break;
			}
			case PageMap.PROJECTS.id: {
				response =
					location.pathname === PageMap.PROJECTS.slug || location.pathname.includes(PageMap.PROJECT.slug)
						? true
						: response;
				break;
			}
			case PageMap.ABOUT.id: {
				response = location.pathname === PageMap.ABOUT.slug ? true : response;
				break;
			}

			default:
		}
		return response;
	};
  return (
    <NavbarWrapper>
        <NavbarLink selected={isCurrentPage(PageMap.HOME.id)} to={PageMap.HOME.slug}> selected projects </NavbarLink>
        <NavbarLink selected={isCurrentPage(PageMap.PROJECTS.id)} to={PageMap.PROJECTS.slug}> all projects </NavbarLink>
        <NavbarLink selected={isCurrentPage(PageMap.ABOUT.id)} to={PageMap.ABOUT.slug}> about</NavbarLink>
    </NavbarWrapper>
  )
}

export default Navbar
