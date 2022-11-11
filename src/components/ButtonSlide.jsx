import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
    display: none;
    @media (max-width: 480px) {
    height: 18vh;
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px;
    };
`;

const Button = styled.button`
    border: none;
    padding: 20px;
    font-size: 20px;
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

const ButtonSlide = () => {
    return (
        <Container>
            <Button><Link to="/productList">Comprar Agora</Link></Button>
        </Container>

    );
};

export default ButtonSlide