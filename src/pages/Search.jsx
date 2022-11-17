import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Product from "../components/Product";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Container = styled.div`
    background: rgba(164,87,182,0.1);
`;

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
`;

const Search = () => {
    const [products, setProducts] = useState([]);
    const query = useLocation().search;

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`/products/search${query}`);
            setProducts(res.data);
        };
        fetchProducts();
    }, [query]);

    return <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            {products.map(product => (
                <Product key={product._id} product={product} />
            ))}
        </Wrapper>
        <Footer />
    </Container>;
};

export default Search;