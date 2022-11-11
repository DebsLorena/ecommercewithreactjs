import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 1000;
    margin-right: 20px;
    padding: 0px 10px;
    gap: 25px;
    p{ &:hover {
        color:#60a2b0;
    }}
    button {
        display: none;
    }
    @media (max-width: 480px){
        margin: 0;
        flex-flow: column nowrap;
        align-items: flex-start;
        z-index: 5;
        background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        height: 100vh;
        width: 65%;
        top: 0;
        right: 0%;
        transition: transform 0.3s ease-in-out;
        p {
            width: 100%;
            font-size: 18px;
            color: #fff;
            padding: 10px;
            left: 0;
            &:hover {
            background: #fff;
            color:  #A457B6;
        };
        };
        button {
            display: block;
            width: 100%;
            font-size: 18px;
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
        };
        };
    }
`;


const RightNav =  ({ open }) => {

    return (
        <MenuItem open={open}>
        <p><Link to="/products/novidades">Novidades</Link></p>
        <p><Link to="/products/personalizados">Personalizados</Link></p>
        <p><Link to="/products/papelaria">Papelaria</Link></p>
        <p><Link to="/products/escrita">Escrita</Link></p>
        <p><Link to="/products/organização">Organização</Link></p>
        <p><Link to="/products/kits">Kits</Link></p>
        <p><Link to="/products/promoção" >Promoção</Link></p>
        <button><Link to="/productList">Comprar</Link></button>
        <button><Link to="/login">Entrar</Link></button>
        <button><Link to="/cart">Sacola</Link></button>
        </MenuItem>
    );
};

export default RightNav