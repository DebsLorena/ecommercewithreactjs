import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    @media (max-width: 480px){
    width: 75%;
    };
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b3b3b;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-image: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 4px;
    &:hover{
        background-image: linear-gradient(to right,#CD3BCF, #A457B6,  #7372B4, #49ADBD, #62C39D );
    }
    &:disabled {
    cursor: not-allowed;
    };
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Linka = styled.a`
    margin: 10px 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b3b3b !important;
`;

const Error = styled.span`
    color: red;
`;

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };
    return (
        <Container>
            <Wrapper>
                <Title>Entrar</Title>
                <Form>
                    <Input placeholder="email" type="email"
                    onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="senha" type="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>Entrar</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Links>
                        <Linka><Link to="/myaccount">Esqueceu sua senha? </Link></Linka>
                        <Linka><Link to="/register">Crie uma nova conta </Link></Linka>
                    </Links>
                    <Linka><Link to="/">Voltar a página principal</Link></Linka>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;