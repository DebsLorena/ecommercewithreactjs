import React from 'react';
import styled from 'styled-components';
import { popularProducts } from "../data.js";
import Product from "./Product";
import { Link } from "react-router-dom";


const Container = styled.div`
    padding: 20px 0px 20px 0px;
`;

const Wrapper = styled.div`
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    font-size: 16px;
    font-weight: 400;
    color: #A457B6;
    `;

const SubTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: white;
font-size: 24px;
color: #A457B6;
padding: 5px 10px;
`;

const Button = styled.div`
    border: none;
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


const Products = () => {
    return (
        <Container>
            <Section>Top</Section>
            <SubTitle>Os Mais Vendidos</SubTitle>
            <Wrapper  >
            {popularProducts.map((item) => (
                <Product item={item} Key={item.id} />
            ))}
            </Wrapper>
            <Button><Link to="/product">Ver Mais</Link></Button>
        </Container>
    )
}

export default Products