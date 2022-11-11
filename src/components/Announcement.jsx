import React from "react";
import styled from "styled-components";
import { WhatsApp, Search, Person, LocalMall } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";


const Container = styled.div`
    height: 50px;
    background-color: white;
    color: #974ca8;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px){
        display: none;
    }
`;

const Left = styled.div`
    flex: 1;
    height: 100%;
    background:  #ffffff;
    margin-left: 25px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 1000;
`;

const Right = styled.div`
    flex: 1;
    height: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SocialContainer = styled.div`
    display: flex;
    padding: 0px 20px;
    gap: 20px;
`;

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #974ca8;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover{
        background-color: #60a2b0;
    };
`;
const SearchBox = styled.div`
    position: absolute;
    width: 250px;
    height: 30px;
    right: 170px;
    padding: 5px 0;
    border-radius: 10px;
    border: 1px solid #974ca8;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 200px;
    padding: 5px 5px;
    border: 0 none;
    &:focus{
        outline: 0;
    };
`;
const Announcement = () => {

    const quantity = useSelector(state => state.cart.quantity)
    // const [product, setProduct] = useState("");
    // const { getProduct } = useGithub();

    // function handleOnChange(e) {
    //     setProduct(e.target.value);
    // }

    // function handleSubmit(e) {
    //     getProduct(product);
    // }

    return (
        <Container>
            <Left>
                Ao comprar nesta loja, você está ajudando o Hospital do Câncer em Uberlândia.
            </Left>
            <Right>
                <SearchBox>
                    <Input
                        placeholder="Pesquisar"
                        type="text"
                        // onChange={handleOnChange}
                        // value={product}
                        // onKeyDown={(e) => e.key == "Enter" && handleSubmit()} 
                        />
                    {/* <SocialIcon ><Search onClick={handleSubmit} /></SocialIcon> */}
                    <SocialIcon ><Search /></SocialIcon>
                </SearchBox>
                <SocialContainer>
                    <SocialIcon >
                        <a href="https://wa.me/+5534984148815" target="_blank" rel="noreferrer">
                            <WhatsApp />
                        </a>
                    </SocialIcon>

                    <SocialIcon>
                        <Link to="/login"><Person /></Link>
                    </SocialIcon>
                    <Link to="/cart">
                        <SocialIcon>
                            <Badge badgeContent={quantity} color="primary">
                                <LocalMall />
                            </Badge>
                        </SocialIcon>
                    </Link>
                </SocialContainer>
            </Right>
        </Container>
    );
};

export default Announcement
