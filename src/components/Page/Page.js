import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 1000px) / 2;
  z-index: 10;
`

export const NavLink = styled(Link)`
  display: flex;
  color: rgba(17, 17, 17, 0.6);
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  font-family: 'Advent Pro', sans-serif;
  
  &.active{
    color: rgba(17, 17, 17, 0.6);
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }  
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and(max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #5AE4A8;
  padding: 10px 22px;
  color: #111111;
  font-family: 'Advent Pro', sans-serif;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`

export const Frame = styled.h1`
  color: #111111;
  font-family: 'Poppins', sans-serif;
  font-weight: bolder;
  margin-top: 100px;
  font-size: 65.2878px;
  text-align: center
`

export const Text1 = styled.p`
    margin-bottom: -10px;
`

export const Text2 = styled.p`
    margin-bottom: -10px;
`

export const Text3 = styled.p`
    margin-bottom: 50px;
`

export const LightText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: rgba(17, 17, 17, 0.6);
  font-size: 14px;
  line-height: 40px;
  text-align: center;
`

export const Paragraph1 = styled.p`
    margin-top: -30px;
`

export const Paragraph2 = styled.p`
  margin-top: -15px;
  
`

export const Paragraph3 = styled.div`
  margin-top: 20px;
  background: #5AE4A8;
  margin-right: 43%;
  margin-left: 43%;
  border-radius: 6px;
  cursor: pointer;
  
`