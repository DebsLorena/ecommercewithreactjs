import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { addNewsletter } from "../redux/apiCalls";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


const Container = styled.div`
    height: 18vh;
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 0px 10px 0px;
`;

const Title = styled.h1`
    font-size: 30px;
    color: white;
`;

const Desc = styled.div`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 10px;
    color: white;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    @media (max-width: 480px) {
        width: 80%;
    };
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #A457B6;
    color: white;
`;


const Neswletter = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    // const history = useHistory();
    
    const handleClick = async e => {
        e.preventDefault();

        const email = input;
        addNewsletter(dispatch, {email});
        // history.replace("/");
    }

    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Receba nossas promoções</Desc>
            <InputContainer>
            <Input placeholder="Preencha o seu email" type="email" onChange={e => setInput(e.target.value)}/>
            <Button onClick={handleClick}>
                <Send />
            </Button>
            </InputContainer>
        </Container>
    );
};

export default Neswletter