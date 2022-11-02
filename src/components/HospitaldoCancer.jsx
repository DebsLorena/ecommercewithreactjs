import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, YouTube, LinkedIn } from '@material-ui/icons';
import { mobile } from "../responsive";
import logolutapelavida from "../img/logolutapelavida.png";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #f7f0d3;
    position: relative;
    overflow: hidden;
    color: #4e4e4e;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Image = styled.img`
    max-width: 350px;
    max-height: 350px;
    left: -150px;
    bottom: -120px;
    position: absolute;
`;

const Logo = styled.h4`
    font-size: 32px;
    font-weight: 500;
`;

const SubLogo = styled.h3`
    font-size: 24px;
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
    z-index: 1;

`;

const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    width: 150px;
    color: #4e4e4e;
    background:  #FED416; 
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
    box-shadow: 0px 15px 35px 0px rgb(0 0 0 / 15%);
    border: 1px solid transparent;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    &:hover {
        background:#4e4e4e;
        color: white;
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;


const List = styled.ul`
    margin: 0;
    padding: 20px 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    z-index: 1;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    z-index: 1;
`;



const Right = styled.div`
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ImageRight = styled.img`
    max-width: 350px;
    max-height: 350px;
    right: 60px;
    top: -130px;
    position: absolute;
`; 

const SocialContainer = styled.div`
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #FED416;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover {
        background-color: #4e4e4e;
    }
`;


const HospitaldoCancer = () => {
    return (
        <Container>
            <Left>
                <Logo> <Image src={logolutapelavida} alt="logo-enjoy"></Image>Grupo</Logo>
                <SubLogo> LUTA PELA VIDA </SubLogo>
                <Desc> O Grupo Luta Pela Vida é uma instituição sem fins lucrativos fundada em 1996 por um grupo de pessoas com o objetivo de oferecer bem-estar e melhores condições de tratamento e cura aos pacientes oncológicos atendidos em Uberlândia.
                </Desc>
                <DivButton>
                <Button>Doações Online</Button>
                <Button>Central de doações</Button>
                </DivButton>
                
            </Left>
            <Center>
                <Logo>Doe:</Logo>
                <SubLogo>LUTA PELA VIDA / HOSPITAL DO CANCER</SubLogo>
                <List>
                    <ListItem><strong>Pix: </strong>Chave CNPJ:  01.316.056/0001-12</ListItem>
                    <ListItem><strong>Banco do Brasil: </strong>Agência: 2591-7 c/c: 9809-4</ListItem>
                    <ListItem><strong>Caixa Econômica: </strong>Agência: 0161 c/c: 506037-1</ListItem>
                    <ListItem><strong>Itaú: </strong>Agência: 3166 c/c 16180-6</ListItem>
                    <ListItem><strong>Bradesco: </strong>Agência: 0265 c/c: 103530-4</ListItem>
                    <ListItem><strong>Santander: </strong>Agência: 3521 C/C: 13001085-9</ListItem>
                </List>
            </Center>
            <Right>
            <ImageRight src={logolutapelavida} alt="logo-enjoy"></ImageRight>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon>
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default HospitaldoCancer