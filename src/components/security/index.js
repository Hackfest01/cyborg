import React from "react";
import { LeftDesign, Body, RightDesign, Text, Topic } from "./AuthenticateElement";

const Index = () =>{
    return(
        <>
            <Body>
                <LeftDesign>
                    <Text>Cyborg</Text>
                </LeftDesign>
                <RightDesign>
                    <Topic>Create your free account</Topic>
                    <input name={"Full name"} placeholder={"First name and Last name"} required/>
                    <input name={"Business name"} placeholder={"Your Business name"} required/>
                    <input name={"Business email"} placeholder={"Your Business Email"} required/>
                    <input name={"Country"} placeholder={"Country"} required/>
                </RightDesign>
            </Body>
        </>

    )
}

export default Index;