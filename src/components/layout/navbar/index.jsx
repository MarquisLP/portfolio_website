import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Smile } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <Smile className="align-middle"/> <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/writing" className="lined-link" activeClassName="active"> <Briefcase /> <span> Writing </span> </Link></li>
              { /* Blog is not currently in use. It may be added at a later time. */ }
              { /* <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li> */ }
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
