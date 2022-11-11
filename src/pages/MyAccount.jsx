import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Person, LocalMall, VpnKey,} from "@material-ui/icons";
import { Link } from "react-router-dom";


const Container = styled.div``;

const Wrapper = styled.div`
    color: gray;
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const Title = styled.h2`
    padding: 20px 0px;

`;
const SubTitle = styled.h1``;

const Form = styled.div`
    padding: 20px 0px;
    cursor: pointer;
    width: 200px;
`;
const MyShop = styled.div`
    border: 1px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background: white;
`;
const MyRegister = styled.div`
    border: 1px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    gap: 10px;
    background: white;
`;
const MyPassword = styled.div`
    border: 1px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    gap: 10px;
    background: white;
`;
const LogoutApp = styled.div`
    border: 1px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    gap: 10px;
    background: white;
`;

const Button = styled.div`
    border: none;
    padding: 10px;
    margin-top:10px;
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

const MyAccount = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Seja muito bem vinda(o)!</Title>
                <SubTitle> Minha Conta</SubTitle>
                <Form>
                <MyShop><LocalMall /> Minhas Compras</MyShop>
                <MyRegister><VpnKey />Alterar o cadastro</MyRegister>
                <MyPassword><Person />Alterar a senha</MyPassword>
                <LogoutApp><Person/>Sair</LogoutApp>
                <Button><Link to="/">Voltar a página principal</Link></Button>
                </Form>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default MyAccount;
