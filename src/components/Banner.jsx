import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    min-width: 300px;
    height: 250px;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px gray;
    &:hover {
        transform: scale(1.2);
        };
    
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    &:hover {
        color: #A457B6;
        };
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

const Banner = ({item}) => {
    return (
        <Container>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Comprar Agora
                        
                    </Button>
                </Info>
        </Container>
    )
}

export default Banner