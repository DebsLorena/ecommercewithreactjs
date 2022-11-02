import React from 'react';
import styled from 'styled-components';
import { banners } from "../data";
import  Banner from "../components/Banner";
import { mobile } from "../responsive";

const Container = styled.div`
    padding: 0px 20px 20px 20px;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Banners = () => {
    return (
        <Container>
            <Wrapper  >
            {banners.map((item) => (
                <Banner item={item} Key={item.id}/>
            ))}
            </Wrapper>
        </Container>
    )
}

export default Banners;