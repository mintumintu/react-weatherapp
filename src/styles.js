import styled from 'styled-components'

const ContainerDiv = styled.div`
    width:50%;
    border:1px solid black;
    padding:5px;
    margin-top:10px;
    background:white;
`;

const AboutHeading= styled.h2`
    font-size:20px;
    text-transform:uppercase;
`;

const HorizontalLine = styled.hr`
    width:100%;
    height:5px;
    background:blue;
`;

const ValueDisplayContainer = styled.div`
display:flex;
flex-direction:row;
`;

const ValueDisplay = styled.h3`
    font-size:100px;
    color:red;
    margin:0px;
    width:50%;
    display:inline;
`;

export {ContainerDiv,AboutHeading,HorizontalLine,ValueDisplay,ValueDisplayContainer};