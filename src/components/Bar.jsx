import React from 'react'
import styled from 'styled-components'
import atendimento from "../img/atendimento.png";
import moto from "../img/moto.png";
import gift from "../img/gift.png";
import desconto from "../img/desconto.png";

const Container = styled.div`
    display: flex;
    `;

const Wrapper = styled.div`
    background: white;
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    max-width: 60px;
    max-height: 60px;
    padding: 0px 5px;`;

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
                <Icon src={atendimento} alt="logo-enjoy"></Icon>
                <Text>Atendimento</Text>
                <Icon src={moto} alt="logo-enjoy"></Icon>
                <Text>Entrega Express</Text>
                <Icon src={gift} alt="logo-enjoy"></Icon>
                <Text>Gift Card</Text>
                <Icon src={desconto} alt="logo-enjoy"></Icon>
                <Text>Desconto 5% Pix</Text>
            </Wrapper>
    </Container>


);
};

export default Bar;