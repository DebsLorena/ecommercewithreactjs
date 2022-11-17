import React, { useState } from "react";
import styled from "styled-components";
import  Banner from "../components/Banner";
import axios from "axios";
import { useEffect } from "react";

const Container = styled.div`
    padding: 0px 20px 20px 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Banners = ({cat}) => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const getBanners = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/banners?category=${cat}`
                        : "http://localhost:5000/api/banners"
                );
                setBanners(res.data);
            } catch (err) { 
            }
        };
        getBanners();        
    }, [cat]);

    return (
        <Container>
            <Wrapper  >
            {banners.map((item) => (
                <Banner key={item._id} item={item}  />
            ))}
            </Wrapper>
        </Container>
    );
};

export default Banners;