import React from "react";
import styled from "styled-components";
import { LocalMall, Share, FavoriteBorderOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    border-radius: 4px;
    transition: all 0.5 ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    height: 290px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd; 
    &:hover ${Wrapper}{
    opacity: 1;
    };
`;

const Circle = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
    border-radius: 4px;
`;

const Info = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    margin: 5px;
    &:hover {
        background-color: #A457B6;
        color: white;
        transform: scale(1.1);
    };
`;

const Description = styled.div`
    width: 60%;
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px rgba(0,0,0,0.5);
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

const Price = styled.div`
    width: 33%;
    font-size: 22px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px rgba(0,0,0,0.5);
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:hover {
        color:  #A457B6;
        transform: scale(1.1);
    };
`;


const Product = ({ item }) => {
    return (
        <Container >
            {/* <Link style={{ textDecoration:"none" }}to={`/product/${item._id}`}> */}
            <Circle/>
            <Image src={item.img}/>
            <Wrapper> 
                <Info>
                    <Icon >
                        <Link to={`/product/${item._id}`}> <LocalMall/> </Link>                        
                    </Icon>
                    <Icon>
                        <Share />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
                <Link to={`/product/${item._id}`}><Description >{item.desc}</Description></Link>
                <Link to={`/product/${item._id}`}><Price>{item.price}</Price></Link>
                
            </Wrapper>
            {/* </Link> */}
        </Container>
    );
};

export default Product