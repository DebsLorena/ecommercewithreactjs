import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
    top: 10px;
    min-width: 200px;
    height: 200px;
    position: relative;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    position: absolute;
    
    
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

const Title = styled.h3`
    color: white;
    margin-bottom: 20px;
    text-shadow: 1px 0px gray;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: #A457B6;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;

    &:hover {
    background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    scale: 1.1;
    };
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Circle src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button><Link to={`/products/${item.cat}`}>Comprar Agora</Link></Button>
                </Info>
        </Container>
    )
}

export default CategoryItem