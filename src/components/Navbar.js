import React from "react";
import styled from 'styled-components'

const ContainerDiv = styled.div`
    background:black;
    display:flex;
    flex-direction:row;
`;

const NavHeading = styled.h1`
    font-size:30px;
    color:white;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
    color:red;
    height:auto;
    margin:20px;
    margin-left:60%;
    font-size:30px;
`;


function Navbar (){
    return(
        <ContainerDiv>
            <NavHeading>Open Weather</NavHeading>
            <SearchBar />
        </ContainerDiv>
    );
}

export default Navbar;
