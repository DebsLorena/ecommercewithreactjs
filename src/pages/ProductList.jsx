import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { mobile } from "../responsive";

const Container = styled.div`
    background: rgba(164,87,182,0.1);
`;

const Title = styled.h1`
    height: 100px;
    color: white;
    text-shadow: 1px 1px gray;
    font-size: 48px;
    font-weight: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 1200px;
    background: white;
`;
const FilterContainer = styled.div`
    position: absolute;
    left: 10px;
    width: 22%;
    height: 500px;
    top: 20px;
    background: rgba(164,87,182,0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
`;

const Filter = styled.div`
    padding: 20px 0px 0px 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
    width: 10px;
`;

const Categories = styled.div`
    width: 75%;
    position: absolute;
    right: 10px;
`;
const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Papelaria</Title>
            <Wrapper>
                <FilterContainer>
                    <Filter>
                        <FilterText>Categorias:</FilterText>
                        <Select>
                            <Option disabled selected>
                                Categoria
                            </Option>
                            <Option>Novidades</Option>
                            <Option>Personalizados</Option>
                            <Option>Papelaria</Option>
                            <Option>Escrita</Option>
                            <Option>Organização</Option>
                            <Option>Kits</Option>
                            <Option>Promoções</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Marcas:</FilterText>
                        <Select>
                            <Option disabled selected>
                                Marca
                            </Option>
                            <Option>Tilibra</Option>
                            <Option>ZebraS</Option>
                            <Option>Faber Castel</Option>
                            <Option>Bic</Option>
                            <Option>Cis</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Cores:</FilterText>
                        <Select>
                            <Option disabled selected>
                                Marca
                            </Option>
                            <Option>Azul</Option>
                            <Option>Verde</Option>
                            <Option>Rosa</Option>
                            <Option>Amarelo</Option>
                            <Option>Roxo</Option>
                            <Option>Preto</Option>
                            <Option>Branco</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Preço:</FilterText>
                        <Select>
                            <Option disabled selected>Preço</Option>
                            <Option>Maior preço</Option>
                            <Option>Menor preço</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <Categories><Products /></Categories>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default ProductList