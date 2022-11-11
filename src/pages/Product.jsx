import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Neswletter from "../components/Neswletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove, LocalMall } from "@material-ui/icons";
import ProductList from "../components/Products";
import compartilhar from "../img/compartilhar.png"
import coracao from "../img/coracao.png";
import pix from "../img/pix.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    @media (max-width: 480px){
    padding: 10px;
    flex-direction: column;
    };
`;

const ImgContainer = styled.div`
    width: 45%;
`;

const Image = styled.img`
    width: 500px;
    display: block;
    height: auto;
    object-fit: cover;
    @media (max-width: 480px){
    height: 50vh;
    };
`;

// const SmalImg = styled.div``;

// const SmalImage = styled.img`
//     width: 100px;
//     float: left;
//     display: block;
//     position: relative;
//`;

const InfoContainer = styled.div`
    width: 45%;
    display: block;
    position: relative;
    padding: 0px 50px;
    @media (max-width: 480px){
    width: 100%;
    padding: 10px 0px;
    }; 
`;

const Info = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: gray;
`;

const Title = styled.h2``;

const Icon = styled.img`
    max-width: 30px;
    max-height: 30px;
    padding: 0px 5px;
    position: absolute;
    top: 10px;
    right: 60px;
    @media (max-width: 480px){
        top: 30px;
        right: 20px;
    }; 
`;

const ContainerPrice = styled.div`
    position: relative;
    height: 80px;
    color: gray;
`;

const TextOldPrice = styled.span``;

const OldPrice = styled.span`
    padding: 5px;
`;

const TextNewPrice = styled.span`
    position: absolute;
    top: 40px;
    left: 0;
`;

const Price = styled.span`
    position: absolute;
    top: 30px;
    left: 40px;
    font-weight: 1000;
    font-size: 32px;
    color: #A457B6;
`;

const Pix = styled.img`
    max-width: 80px;
    max-height: 80px;
    position: absolute;
    right: 160px;
    @media (max-width: 480px){
        display: none;
    }; 
`;

const TextPix = styled.span`
    width: 140px;   
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    @media (max-width: 480px){
        top: 30px;
        right: 0px;
    }; 
`;
const AddContainer = styled.div`
    width: 50%;
    padding: 20px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid  #A457B6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    color: gray;
`;

const Button = styled.button`
    width: 200px;
    font-weight: 600;
    border: none;
    position: absolute;
    right: 80px;
    padding: 10px;
    gap: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    };
    @media (max-width: 480px){
        right: 20px;
    };
`;

const Description = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
`;

const TitleDescription = styled.h2`
    color: gray;
`;

const Feature = styled.div`
    margin: 10px 0px;
    border: 1px solid rgba(164,87,182,0.1);
`;

const Desc = styled.p`
    font-size: 18px;
    margin: 20px 0px;
    line-height: 30px;
    color: gray;
`;



const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity })
        );
    };


    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                    {/* <SmalImg>
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                    </SmalImg> */}
                </ImgContainer>
                <InfoContainer>
                    <Info>
                        <Title>{product.title}</Title>
                        <Icon src={compartilhar} alt="compartilhar"></Icon>
                        <Icon style={{ marginTop: "40px" }} src={coracao} alt="compartilhar"></Icon>
                        <Feature></Feature>
                        <ContainerPrice>
                            <TextOldPrice>de</TextOldPrice>
                            <OldPrice>R$</OldPrice>
                            <TextNewPrice>por</TextNewPrice>
                            <Price>R$ {product.price}</Price>
                            <Pix src={pix} alt="compartilhar" />
                            <TextPix>Economize 5% com pagamentos em pix.</TextPix>
                        </ContainerPrice>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity("dec")} />
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity("inc")} />
                            </AmountContainer>
                            <Button onClick={handleClick}><LocalMall />Adicionar a Sacola</Button>
                        </AddContainer>
                    </Info>
                    <Description>
                        <TitleDescription>
                            Descrição
                        </TitleDescription>
                        <Feature></Feature>
                        <Desc>
                            {product.desc}
                        </Desc>
                    </Description>
                </InfoContainer>
            </Wrapper>
            <ProductList />
            <Neswletter />
            <Footer />
        </Container>
    );
};

export default Product