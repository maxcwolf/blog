import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Headroom from "react-headroom"
import theme from "../../config/theme"
//import logo from "../../static/images/mw-grey.jpg"

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 1000;
  font-size: 2rem;
  align-items: center;
  font-family: ${theme.fontFamily.heading};
  color: white;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 1.25rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.black.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions};
    &:hover {
      color: ${props => props.theme.colors.black.lighter};
    }
  }
`

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">MW</StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
)

export default NavBar
