import React from "react";
import "./Page"
import "./page.css"
import cyborgLogo from "../image/Cyborg.png"

import
{
    Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Frame, Text1,
    Text2, Text3, LightText, Paragraph1, Paragraph2, Paragraph3
} from "./Page";

const Index = () =>{
    return(
        <>
            <Nav>
                <NavLink to={"/"}>
                    <img src={cyborgLogo} alt={""}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to={"/"} activeStyle>
                        Home
                    </NavLink>
                    <NavLink to={"/"} activeStyle>
                        About
                    </NavLink>
                    <NavLink to={"/"} activeStyle>
                        Developers
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={""}> Create Account</NavBtnLink>
                </NavBtn>
            </Nav>

            <Frame>
                <Text1>Enjoy better and</Text1>
                <Text2>transparent payment</Text2>
                <Text3>experiences</Text3>
            </Frame>
            <LightText>
                <Paragraph1>Make payments across the world Leveraging the</Paragraph1>
                <Paragraph2>blockchain technology to</Paragraph2>
                <Paragraph3>
                    <a href={""}>
                        Create Account
                    </a>
                    </Paragraph3>
            </LightText>

        </>

    )
}

export default Index;