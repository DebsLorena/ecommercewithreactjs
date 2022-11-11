import React from "react";
import styled from "styled-components";
import logo from "../img/logo-pink.png";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    padding: 60px 0px;
    height: auto;
    background: rgba(164,87,182,0.1);
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    color: #A457B6;
    padding: 5px 0px;
`;

const Title = styled.div`
    font-size: 24px;
    color: #A457B6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const Text = styled.p`
    width: 60%;
    color: gray;
    font-size: 16px; 
    font-weight: 600; 
    padding: 10px;  
`;

const Buttom = styled.div`
    width: 200px;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    };
`;

const Logo = styled.p`
    position: absolute;
    font-family: 'Style Script', cursive;
    font-size: 200px;
    height: auto;
    color: #A457B6;
    left: 150px;
    top: -50px;
    opacity: 0.2;
    @media (max-width: 480px){
        left: 0px;
        top: 20px;
        font-size: 100px;
    };
`;

const Img = styled.img`
    position: absolute;
    width: 350px;
    height: auto;
    right: 150px;
    bottom: -150px;
    opacity: 0.2;
    @media (max-width: 480px){
        right: -80px;
        bottom: -20px;
        width: 250px;
    };
`;



const About = () => {
    
    return (
        <Container id="about">
            <Logo>Enjoy</Logo>
            <Wrapper>
                <SubTitle>Um pouquinho da nossa História</SubTitle>
                <Title><Link to={"/terms"}>Sobre nós</Link></Title>
                <Text>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.There are many variations passages Lorem Ipsum variatio passages Lorem available, but the majority suffered alteration.</Text>
                <Text>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.There are many variations passages Lorem Ipsum variatio passages Lorem available, but the majority suffered alteration. </Text>
                <Buttom><Link to={"/productList"}>Comprar Agora</Link></Buttom>
            </Wrapper>
            <Img src={logo} alt="logo-enjoy"></Img>
        </Container>
    );
};

export default About