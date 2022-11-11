import React from "react";
import styled from "styled-components";
import atendimento from "../img/atendimento.png";
import moto from "../img/moto.png";
import gift from "../img/gift.png";
import desconto from "../img/desconto.png";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    padding: 10px;
`;

const Wrapper = styled.div`
    background: white;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 480px){
        display: grid;
    };
`;

const Icon = styled.img`
    max-width: 60px;
    max-height: 60px;
    padding: 0px 5px;
`;

const Text = styled.p`
    font-size: 24px;
    padding: 0px 10px;
    cursor: pointer;
    margin-left: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 1000;
    margin-right: 20px;
    color: #A457B6;
`;

const Bar = () => {

    return (
        <Container>
            <Wrapper>
                <a href="https://wa.me/+5534984148815/" target="_blank" rel="noreferrer">
                    <Icon src={atendimento} alt="logo-enjoy"></Icon>
                    <Text>Atendimento</Text>
                </a>

                <Link to={"/terms"}>
                    <Icon src={moto} alt="logo-enjoy"></Icon>
                    <Text>Entrega Express</Text>
                </Link>

                <Link to={"/terms"}>
                    <Icon src={gift} alt="logo-enjoy"></Icon>
                    <Text>Gift Card</Text>
                </Link>

                <Link to={"/terms"}>
                    <Icon src={desconto} alt="logo-enjoy"></Icon>
                    <Text>Desconto 5% Pix</Text>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Bar;