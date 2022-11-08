import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import HospitaldoCancer from "../components/HospitaldoCancer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";


const Container = styled.div`
    color: gray;
`;
    

const Wrapper = styled.div`
    background: #f5fbfd;
    ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
    height: 100px;
    background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
	background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 56px;
    font-weight: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
    background: white;
`;
const TopButtonLeft = styled.button`
    width: 200px;
    border: none;
    padding: 10px;
    margin-left: 10px;
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    &:hover {
        background: white;
        color: gray;
    };
`;

const TopButtonRight = styled.button`
    width: 200px;
    border: 1px solid gray;
    padding: 10px;
    margin-right: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    &:hover {
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    border: 1px solid transparent;
    };
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 150px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

// const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Line = styled.hr`
    margin: 10px 0px;
    border: 1px solid rgba(164,87,182,0.1);
`;

const Summary = styled.div`
    margin-right: 10px;
    flex: 1;
    border: 2px solid rgba(164,87,182,0.1);
    border-radius: 10px;
    padding: 20px;
    height: 70vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Input = styled.input`
    width: 95%;
    padding: 10px 10px; 
    color: gray;
    border: 1px solid rgba(164,87,182,0.1);
    border-radius: 4px;
`;
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 10px;
    margin-left: 10px;
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    &:hover {
        background: white;
        color: gray;
    };
`;

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Minha Sacola</Title>
                <Top>
                    <TopButtonLeft>CONTINUE Comprando</TopButtonLeft>
                    <TopTexts>
                        <TopText>Minhas Compras</TopText>
                        <TopText>Minha Lista(0)</TopText>
                    </TopTexts>
                    <TopButtonRight type="filled">Finalizar compras</TopButtonRight >
                </Top>
                <Bottom>
                    <Info>
                    {cart.products.map((product) => (
                        <Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName>
                                        <b>Produto:</b> {product.title}
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b>{product._id}
                                    </ProductId>
                                    <ProductColor color={product.color} />
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    R$ {product.price * product.quantity}
                                    </ProductPrice>
                            </PriceDetail>
                        </Product>
                    ))}
                    <Line></Line>
                    </Info>
                    <Summary>
                        <SummaryTitle>Compras</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Input placeholder="cep" />
                        <SummaryItem>

                            <SummaryItemText>Taxa de entrega</SummaryItemText>
                            <SummaryItemPrice>R$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <Input placeholder="cupom de desconto" />
                        <SummaryItem>
                            <SummaryItemText>Desconto</SummaryItemText>
                            <SummaryItemPrice>R$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Finalizar compras</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <HospitaldoCancer />
            <Footer />
        </Container>
    );
};

export default Cart;