import React from "react";
import styled from 'styled-components';
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
 background-color: ${pizzaRed};
 padding: 10px;
 position: fixed;
 width: 100%;
 z-index: 999;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 3px 2px 1px black;
`


export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Pizza Nice Man <span role='img' aria-label="pizza nice man">🍕</span> 
        </Logo>   
    </NavbarStyled>;
}