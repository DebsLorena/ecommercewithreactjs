import React from 'react';
import styled from 'styled-components';
import { categories } from "../data";
import  CategoryItem from "../components/CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    background-color: rgba(164,87,182,.10);
    padding: 20px 0px;
    `;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    color: #A457B6;
    padding: 5px 0px;
    `;

const SubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #A457B6;
`;



const Categories = () => {
    return (
        <Container>
            <Section>Categorias</Section>
            <SubTitle>Principais</SubTitle>
            <Wrapper>
            {categories.map((item) => (
                <CategoryItem item={item} Key={item.id}/>
            ))}
            </Wrapper>
        </Container>
    )
}

export default Categories;

    

