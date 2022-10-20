import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Pinterest, YouTube, Phone, MailOutline, Room } from '@material-ui/icons';
import { mobile } from "../responsive";
import logo from "../img/logo-pink.png";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #A457B6;

`;

const Image = styled.img`
    max-width: 30px;
    max-height: 30px;
    padding: 0px 5px;
`;

const Logo = styled.h1`
    font-family: 'Style Script', cursive;
    font-size: 32px;
    font-weight: 500;
`;

const SubLogo = styled.h3`
    font-size: 24px;
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;

`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: #A457B6;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: #A457B6;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> <Image src={logo} alt="logo-enjoy"></Image>Enjoy </Logo>
                <SubLogo> Paper & Presentes </SubLogo>
                <Desc> A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia
                </Desc>
                <SocialContainer>
                    <SocialIcon color="A457B6">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="A457B6">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="A457B6">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="A457B6">
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color="A457B6">
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Informações</Title>
                <List>
                    <ListItem>Sobre nós</ListItem>
                    <ListItem>Categorias</ListItem>
                    <ListItem><Link to="/terms">Politica de Privacidades</Link></ListItem>
                    <ListItem><Link to="/terms">Termos & Condições</Link></ListItem>
                    <ListItem><Link to="/terms">Informações</Link></ListItem>
                    <ListItem><Link to="/terms">Trocas</Link></ListItem>
                    <ListItem><Link to="/terms">Gift Card</Link></ListItem>
                    <ListItem>Newsletter</ListItem>
                    <ListItem>Entre em contato</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Rua Curitiba, 520, Bairro Brasil - Uberlândia
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> 34 3245 8796
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> 34 98125 3045
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@enjoypaper@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer