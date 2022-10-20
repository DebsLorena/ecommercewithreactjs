import React, { useState }  from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import banner1 from '../img/banner1-removebg-preview.png';
import banner2 from '../img/banner2-removebg-preview.png';
import banner3 from '../img/banner3-removebg-preview.png';
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 350px;
    padding: 20px 0px;
    position: relative;
    overflow: hidden;
    background: rgba(164,87,182,0.1);
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgba(164,87,182,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 190px;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
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
    flex: 1;
    height: 40vh;
    top: 10px;
    gap: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: white;
    padding: 0px 10px;
    border-radius: 4px;
    cursor: pointer;
    ${mobile({ height: "20vh" })}
`;





const PostInstagram = () => {
/*não funciona verificar*/
    const [postIndex, setPostIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left") {
            setPostIndex(postIndex > 0 ? postIndex-1 : 5)
        } else {
            setPostIndex(postIndex < 5 ? postIndex+1 : 0)
        }

    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Section>Instagram</Section>
            <SubTitle>@enjoypaper&presentes</SubTitle>
            <Wrapper>
                <Image src={banner1} alt="img-insta"></Image>
                <Image src={banner2} alt="post-insta"></Image>
                <Image src={banner3} alt="post"></Image>
                <Image src={banner1} alt="img-insta"></Image>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default PostInstagram