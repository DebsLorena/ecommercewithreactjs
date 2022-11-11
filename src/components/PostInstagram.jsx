import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import image1 from "../img/insta/1.png";
import image2 from "../img/insta/2.png";
import image3 from "../img/insta/3.png";
import image4 from "../img/insta/4.png";
import image5 from "../img/insta/5.png";
import image6 from "../img/insta/6.png";
import image7 from "../img/insta/7.png";
import image8 from "../img/insta/8.png";


const Container = styled.div`
    width: 100%;
    height: 350px;
    padding: 20px 0px;
    position: relative;
    overflow: hidden;
    background: rgba(164,87,182,0.1);
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
    font-size: 24px;
    color: #A457B6;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    height: 40vh;
    top: 10px;
    gap: 10px;
    position: relative;
    display: flex;
    cursor: grab;
    img { pointer-events:none };
`;

const image = [image1, image2, image3, image4, image5, image6, image7, image8]

const PostInstagram = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

    return (
        <Container>
            <Section>Instagram</Section>
            <SubTitle>@enjoypaper&presentes</SubTitle>
            <motion.div ref={carousel} whileTop={{ cursor: "grabbing" }}>
                <motion.div drag="x"
                    dragConstraints={{ right: 0, left: -width }} >
                        <Wrapper>
                        {image.map(image => (
                            <motion.div key={image}>
                                <img src={image} alt="insta" />
                            </motion.div>
                        ))}
                    </Wrapper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default PostInstagram