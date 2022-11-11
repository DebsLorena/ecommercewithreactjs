import React from "react";
import styled from "styled-components";
import logo from "../img/logo-white.png";
import { Link } from "react-router-dom";
import Burger from "../components/Burger";


const Container = styled.div`
    height: 70px;
    background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 15px;
`;

const Image = styled.img`
    max-width: 30px;
    max-height: 30px;
    padding: 0px 5px;
`;

const Logo = styled.h1`
    font-family: 'Style Script', cursive;
    color: white;
    font-size: 32px;
    font-weight: 500;
    &:hover {
        color:#A457B6;
    };
`;

const Right = styled.div`
    flex: 2;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


const Navbar = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/"><Image src={logo} alt="logo-enjoy"></Image></Link>
                    <Link to="/"><Logo>Enjoy</Logo></Link>
                </Left>
                <Right>
                    <Burger />
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;