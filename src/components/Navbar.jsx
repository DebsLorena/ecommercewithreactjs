import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../img/logo-white.png";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 70px;
    background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    ${mobile({ height: "50px" })}
    
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    ${mobile({ padding: "10px 0px" })}
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
    }
`;

const Right = styled.div`
    flex: 2;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 1000;
    margin-right: 20px;
    text-shadow: 1px 1px rgba(0,0,0,0.5);
    &:hover {
        color:#60a2b0 !important;
    }
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
                    <MenuItem><Link to="/products/novidades">Novidades</Link></MenuItem>
                    <MenuItem><Link to="/products/personalizados">Personalizados</Link></MenuItem>
                    <MenuItem><Link to="/products/papelaria">Papelaria</Link></MenuItem>
                    <MenuItem><Link to="/products/escrita">Escrita</Link></MenuItem>
                    <MenuItem><Link to="/products/organização">Organização</Link></MenuItem>
                    <MenuItem><Link to="/products/kits">Kits</Link></MenuItem>
                    <MenuItem><Link to="/products/promoção" >Promoção</Link></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;