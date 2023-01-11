import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

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
    img { 
        pointer-events:none;
        width: 300px;
    };
    video {
        pointer-events:none;
        width: 300px;
        height: 300px;
        object-fit: cover;
    };
`;

const IFeedItem = [
    {   id: "string",
        media_type: "IMAGE" | "VIDEO",
        media_url: "string",
        permalink: "string",
    }
]

const PostInstagram = () => {

    const [feedList, setFeedList] = useState(IFeedItem);
    async function getInstaFeed() {
        const token = process.env.REACT_APP_INSTA_TOKEN;
        const fields = "media_url,media_type,permalink";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
        const { data } = await axios.get(url);
        setFeedList(data.data);
    }
    useEffect(() => {
        getInstaFeed();
    }, []);


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
                        {feedList.map(item => (
                            <motion.div>
                            <a key={item._id}  href={item.permalink}  target="_blank">
                                {item.media_type === "IMAGE" ? <img src={item.media_url} /> : (
                                    <video controls>
                                        <source src={item.media_url}></source>
                                    </video>
                                )}
                            </a>
                            </motion.div>
                        ))}
                    </Wrapper>
                </motion.div>
            </motion.div>
        </Container>
    );
};

export default PostInstagram