import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Neswletter from '../components/Neswletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove, LocalMall } from '@material-ui/icons';
import ProductList from '../components/Products';
import { mobile } from "../responsive";
import compartilhar from '../img/compartilhar.png'
import coracao from '../img/coracao.png'
import pix from '../img/pix.png'

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    width: 45%;
    
`;
const SmalImg = styled.div``;

const SmalImage = styled.img`
    width: 100px;
    float: left;
    display: block;
    position: relative;
    `;

const Image = styled.img`
    width: 500px;
    display: block;
    height: auto;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    width: 45%;
    display: block;
    position: relative;
    padding: 0px 50px;
    
    ${mobile({ padding: "10px" })}
`;

const Info = styled.div`
    background: rgba(164,87,182,0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: gray;
`;

const Title = styled.h2``;

const IdProduct = styled.p`
    padding: 5px 0px;
    font-size: 12px;
`;

const Icon = styled.img`
    max-width: 30px;
    max-height: 30px;
    padding: 0px 5px;
    position: absolute;
    top: 10px;
    right: 60px;
    `;

const ContainerPrice = styled.div`
    position: relative;
    height: 80px;
    color: gray;
    `;
    
const TextOldPrice = styled.span``;

const OldPrice = styled.span`
    padding: 5px

`;

const TextNewPrice = styled.span`
    position: absolute;
    top: 40px;
    left: 0px;
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
    right: 160px;`;

const TextPix = styled.span`
    width: 140px;   
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 14px;
    
    display: flex;
    align-items: flex-start;
    `;


// const FilterContainer = styled.div`
//     width: 50%;
//     margin: 30px 0px;
//     display: flex;
//     justify-content: space-between;
//     ${mobile({ width: "100%" })}
// `;

// const Filter = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const FilterTitle = styled.span`
//     font-size: 20px;
//     font-weight: 200;
// `;

// const FilterColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: ${(props) => props.color};
//     margin: 0px 5px;
//     cursor: pointer;
// `;

// const FilterSize = styled.select`
//     margin-left: 10px;
//     padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    padding: 20px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
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
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.imgur.com/IYnjq5k.png" />
                    <SmalImg>
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                        <SmalImage src="https://i.imgur.com/IYnjq5k.png" />
                    </SmalImg>
                </ImgContainer>

                <InfoContainer>
                    <Info>
                    <Title>Mochila Masculina Infantil</Title>
                    <IdProduct>Código: 556847</IdProduct>
                    <Icon src={compartilhar} alt="compartilhar"></Icon>
                    <Icon style={{ marginTop: "40px" }} src={coracao} alt="compartilhar"></Icon>
                    <Feature></Feature>
                    <ContainerPrice>
                        <TextOldPrice>de</TextOldPrice>
                        <OldPrice> R$64,90</OldPrice>
                        <TextNewPrice>por</TextNewPrice>
                        <Price>R$ 49,90</Price>
                        <Pix src={pix} alt="compartilhar"/> 
                        <TextPix>Economize 5% com pagamentos em pix.</TextPix>
                    </ContainerPrice>
                    {/* <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer> */}
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button><LocalMall />Adicionar a Sacola</Button>
                    </AddContainer>
                    </Info>

                    <Description>
                        <TitleDescription>
                            Descrição
                        </TitleDescription>
                        <Feature></Feature>
                        <Desc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
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