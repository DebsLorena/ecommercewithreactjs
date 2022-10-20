import React from 'react';
import styled from 'styled-components';
import { banners } from "../data";
import  Banner from "../components/Banner";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 0px 20px 20px 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Banners = () => {
    return (
        <Container>
            {banners.map((item) => (
                <Banner item={item} Key={item.id}/>
            ))}
        </Container>
    )
}

export default Banners;