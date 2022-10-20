import React from 'react';
import styled from 'styled-components';
import ImagePapelaria from "../img/about.jpg"

const Container = styled.div`
    width: 100%;
    height: 500px;
    background: rgba(164,87,182,0.1);
    display: flex;
`;
const Wrapper = styled.div`
    flex: 1;
    padding: 80px;
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

const Img = styled.img`
    Flex: 1;
    padding: 50px;
    `;



const About = () => {
    return (
        <Container>
            <Wrapper>
            <SubTitle>Um pouquinho da nossa História</SubTitle>
            <Title>Sobre nós</Title>
            <Text>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.There are many variations passages Lorem Ipsum variatio passages Lorem available, but the majority suffered alteration.</Text>
            <Text>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.There are many variations passages Lorem Ipsum variatio passages Lorem available, but the majority suffered alteration. </Text>
            <Buttom>Comprar Agora</Buttom>
            </Wrapper>
            <Img src={ImagePapelaria} alt="logo-enjoy"></Img>
        </Container>
    )
}

export default About