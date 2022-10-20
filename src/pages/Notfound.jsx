import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from "styled-components";


const Container = styled.div``;

const Info = styled.div`
    color: gray;
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
const Notfound = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Info>
                <h2>404 Error</h2>
                <h1>Desculpe, Página não encontrada.</h1>
                <Button>Voltar a página principal</Button>
            </Info>

            
            <Footer />
        </Container>
    );
};

export default Notfound;