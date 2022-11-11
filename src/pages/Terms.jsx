import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Neswletter from "../components/Neswletter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;

const Info = styled.div`
    padding: 10px;
`;

const PrivacyPolicy = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    color: gray;
`;

const Feature = styled.div`
    margin: 10px 0px;
    border: 1px solid rgba(164,87,182,0.1);
`;

const P = styled.p`
    font-size: 18px;
    margin: 20px 0px;
    line-height: 30px;
    color: gray;
`;

const Exchanges = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Information = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const GiftCard = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
`;

const Terms = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Info>
                <PrivacyPolicy>
                    <Title>Politica de Privacidade</Title>
                    <Feature></Feature>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                </PrivacyPolicy>
                <Exchanges>
                    <Title>Trocas</Title>
                    <Feature></Feature>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                </Exchanges>
                <Information>
                    <Title>Informações</Title>
                    <Feature></Feature>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                </Information>
                <GiftCard>
                    <Title>Gift Card</Title>
                    <Feature></Feature>
                    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
                </GiftCard>
            </Info>
            <Neswletter />
            <Footer />
        </Container>
    );
};

export default Terms;