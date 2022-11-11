import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../components/CategoryItem";
import { motion } from "framer-motion/dist/framer-motion";
import { useRef, useState, useEffect } from 'react';

const Container = styled.div`
    background-color: rgba(164,87,182,.10);
    padding: 20px 0px;
    width: 100%;
    overflow: hidden;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    cursor: grab;
    
`;

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

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);


    return (
        <Container >
            <Section>Categorias</Section>
            <SubTitle>Principais</SubTitle>
            <motion.div ref={carousel} whileTop={{ cursor: "grabbing" }}>
                <motion.div drag="x" 
                dragConstraints={{ right: 0, left: -width}}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}>
                    <Wrapper >
                        {categories.map((item) => (
                            <motion.div Key={item.id} > 
                                <CategoryItem item={item}  />
                            </motion.div>
                        ))} 
                    </Wrapper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default Categories;



