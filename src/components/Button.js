import React from "react"
import { Link } from "gatsby"
import theme from "../gatsby-plugin-theme-ui/index"
import styled from "@emotion/styled"

const ButtonStyle = styled(Link)`
  background: ${theme.colors.secondary};
  display: inline-block;
  color: white;
  padding: 10px 16px 8px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
  width: fit-content;
  transition: 0.3s;
  :hover {
    background: #038bd8;
  }
`

const Button = ({ children, to }) => {
  return <ButtonStyle to={to}>{children}</ButtonStyle>
}

export default Button
