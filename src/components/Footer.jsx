import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, Pinterest, YouTube, Phone, MailOutline, Room } from "@material-ui/icons";
import logo from "../img/logo-pink.png";
import { Link } from "react-router-dom";



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
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
    background-color: #A457B6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: #A457B6;
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
                <Logo> <Link to="/"><Image src={logo} alt="logo-enjoy"></Image>Enjoy </Link></Logo>
                <SubLogo> Paper & Presentes </SubLogo>
                <Desc> A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. Wikipédia
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <a href="https://www.instagram.com/enjoypapersepresentes/" target="_blank" rel="noreferrer"><SocialIcon color="A457B6">
                        <Instagram />
                    </SocialIcon></a>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon>
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Informações</Title>
                <List>
                    <ListItem><Link href="about" title="about">Sobre nós</Link></ListItem>
                    <ListItem>Categorias</ListItem>
                    <ListItem><Link to="/terms">Politica de Privacidades</Link></ListItem>
                    <ListItem><Link to="/terms">Termos & Condições</Link></ListItem>
                    <ListItem><Link to="/terms">Informações</Link></ListItem>
                    <ListItem><Link to="/terms">Trocas</Link></ListItem>
                    <ListItem><Link to="/terms">Gift Card</Link></ListItem>
                    <ListItem>Newsletter</ListItem>
                    <ListItem><a href="https://wa.me/+5534984148815" target="_blank" rel="noreferrer">Entre em contato</a></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contato</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Rua Curitiba, 520, Bairro Brasil - Uberlândia
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> 34 3245 8796
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> <a href="https://wa.me/+5534984148815" target="_blank" rel="noreferrer"> 34 98414 8815</a>
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@enjoypaper@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer