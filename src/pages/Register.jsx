import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
    url("https://www.graf-von-faber-castell.com.br/-/media/Graf-von-Faber-Castell/e-com/limited-edition-overview/image-slider-wide-limited-editions-heritage-ottilie.ashx?la=pt-BR&h=691&w=1280&mw=1280&hash=3CC45A8272797CEFCF49371A7A1D08CAEDB86BDA")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color:  rgba(255, 255, 255, 0.5);
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 100%;
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
`;

const Linka = styled.a`
    margin: 10px 20px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray !important;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Cria minha conta</Title>
                <Form>
                    <Input placeholder="email" />
                    <Input placeholder="cpf" />
                    <Input placeholder="nome completo" />

                    <Input placeholder="endereço" />
                    <Input placeholder="cep" />
                    <Input placeholder="complemento" />
                    <Input placeholder="cidade" />
                    <Input placeholder="estado" />

                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        Ao criar a conta estou de acordo com a <b>Política de Privacidade</b>.
                    </Agreement>
                    <Button>Criar</Button>
                </Form>
                <Links>
                    <Linka><Link to="/login"><b>Já possui uma conta? Inicie sessão</b></Link></Linka>  
                </Links>
                <Linka><Link to="/">Voltar a página principal</Link></Linka>
            </Wrapper>
        </Container>
    );
};

export default Register;