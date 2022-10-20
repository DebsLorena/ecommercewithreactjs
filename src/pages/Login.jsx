import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
    url("https://www.graf-von-faber-castell.com.br/-/media/Graf-von-Faber-Castell/e-com/special-pages/gift-finder/for-her/stage-image-for-her-yozakura.ashx?mw=1280&hash=D7CAC84F93B1A7DBB4684793AF3022BF09EAFAF5")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray !important;
`;
const Linka = styled.a`
    margin: 10px 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray !important;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Entrar</Title>
                <Form>
                    <Input placeholder="email" />
                    <Input placeholder="senha" />
                    <Button>Entrar</Button>
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