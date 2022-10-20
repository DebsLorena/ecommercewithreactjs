import React from 'react'
import styled from 'styled-components'
import { WhatsApp, Search, Person, LocalMall } from '@material-ui/icons';
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
    height: 50px;
    background-color: white;
    color: #974ca8;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Left = styled.div`
    flex: 1;
    height: 100%;
    background:  #ffffff;
    margin-left: 25px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 1000;
    
`;

const Right = styled.div`
    flex: 2;
    height: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;


const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #974ca8;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover{
        background-color: #60a2b0;
    }
`;




const Announcement = () => {
    return (
        <Container>
            <Left>
                Frete Grátis para compras acima de R$500,00
            </Left>
            <Right>
                <SocialContainer>
                    <SocialIcon>
                        <Search />
                    </SocialIcon>
                    <SocialIcon>
                        <WhatsApp />
                    </SocialIcon>

                    <SocialIcon>
                        <Link to="/login"><Person /></Link>
                    </SocialIcon>
                    <SocialIcon>
                        <Link to="/cart"><LocalMall /></Link>
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default Announcement