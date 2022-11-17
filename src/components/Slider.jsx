import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    position: relative;
    overflow: hidden;
    @media (max-width: 480px) {
        width: 100vw;
    };
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 100%;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 50px; 
    @media (max-width: 480px) {
        display: none;
    }
`;

const Title = styled.h1`
    font-size: 70px;
    color: white;
    @media (max-width: 480px) {
        display: none;
    };
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    &:hover {
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    };
`;

const Slider = ({item}) => {

    return (
        <Container>
            <Wrapper  >
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img}></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button><Link to={`/products/${item.categories}`}>Comprar Agora</Link></Button>
                        </InfoContainer>
                    </Slide>
            </Wrapper>
        </Container>
    );
};

export default Slider
