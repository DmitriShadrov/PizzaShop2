import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-bottom: 40px;
`

export const FoodLadel = styled(Title)`
    position: absolute;
    background-color: #ffffff91;
    padding: 5px;
`

export const Food = styled.div`
    height: 200px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({img}) => `url(${img});` }
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 11px;
    margin-top: 5px;
    transition-property: box-shadow margin-top filter; 
    transition-duration: 0.2s;
    box-shadow: 0px 0px 2px 0px #1c1c1c;
    &:hover{
        cursor: pointer;
        filter: contrast(100%);
        margin-top: 0px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 15px 0px #1c1c1c;
        
    }
`