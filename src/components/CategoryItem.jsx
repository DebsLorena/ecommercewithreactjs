import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    top: 10px;
    width: 100%;
    height: 25vh;
    position: relative;
    padding: 10px 10px;
    
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
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
`;

const Title = styled.h4`
    color: white;
    margin-bottom: 20px;
    text-shadow: 1px 1px gray;
    border: 5px solid transparent;
    border-radius: 5px;
    &:hover {
        background-color: rgba(0,0,0,0.2);
        border: 5px solid rgba(0,0,0,0.05);
        
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

const CategoryItem = ({item}) => {
    return (
        <Container>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Comprar Agora</Button>
                </Info>
        </Container>
    )
}

export default CategoryItem