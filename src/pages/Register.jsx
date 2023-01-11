import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Forms from "../components/Forms";
import { useDispatch } from "react-redux";
import {addUser } from "../redux/apiCalls";


const Container = styled.div`
    width: 100vw;
    background: linear-gradient(to right, #62C39D,#49ADBD, #7372B4, #A457B6, #CD3BCF);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px){
        height: auto;
    };
`;

const Wrapper = styled.div`
    width: 60%;
    margin: 20px;
    padding: 20px;
    background-color:  rgba(255, 255, 255, 0.5);
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
    flex-wrap: wrap;
    justify-content: space-between;
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
    color: #3b3b3b !important;
`;

const Register = () => {

    const [values, setValues] = useState({
        email: "",
        cpf: "",
        name: "",
        secondName: "",
        birthday: "",
        adress: "",
        cep: "",
        completed: "",
        city: "",
        state: "",
        password: "",
        confirmPassword: "",
    
    }); 

    const dispatch = useDispatch();
    
    const handleClick = async e => {
        e.preventDefault();
        console.log(values)
        const register = values;
        addUser(dispatch, {register});
        console.log(register)
        // history.replace("/");
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    


const inputs = [
    {
        id: 1,
        email: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errorMessage: "Email inválido!",
        pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        required: true,
    }, {
        id: 2,
        cpf: "CPF",
        type: "text",
        placeholder: "cpf",
        label: "CPF",
        errorMessage: "Digite um CPF ou CNPJ",
        pattern: "^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$",
        required: true,

    }, {
        id: 3,
        name: "nome",
        type: "text",
        placeholder: "Nome",
        label: "Nome",
        errorMessage: "Preenchimento obrigatório",
        pattern: "^[a-zA-Z]+$",
        required: true,
    }, {
        id: 4,
        secondName: "sobrenome",
        type: "text",
        placeholder: "Sobrenome",
        label: "Sobrenome",
        errorMessage: "Inválido, apenas letras.",
        pattern: "^[a-zA-Z]+$",
        required: true,
    }, {
        id: 5,
        birthday: "dataDeNascimento",
        type: "date",
        placeholder: "Data de nascimento",
        label: "data de nascimento",
        errorMessage: "Data inválida!",
        pattern: "^[0-9]+$",
        required: true,
    }, {
        id: 6,
        cep: "CEP",
        type: "text",
        placeholder: "CEP",
        label: "CEP",
        errorMessage: "Cep inválido, 8 números!",
        pattern: "^([0-9]{5}\.?[0-9]{3})$",
        required: true,
    }, {
        id: 7,
        adress: "endereço",
        type: "text",
        placeholder: "Endereço",
        label: "Endereço",
        errorMessage: "Numero de caracteres excedido..",
        pattern: "^[a-zA-Z0-9+_.-]+$",
        required: true,
    }, {
        id: 8,
        completed: "complemento",
        type: "text",
        placeholder: "Complemento",
        label: "Complemento",
        errorMessage: "Inválido, apenas letras.",
        pattern: "^[a-zA-Z0-9+_.-]+$",
        maxLength: 30,
        required: true,
    }, {
        id: 9,
        city: "cidade",
        type: "text",
        placeholder: "Cidade",
        label: "Cidade",
        errorMessage: "Inválido, apenas letras.",
        pattern: "^[a-zA-Z0-9+_.-]+$",
        required: true,
    }, {
        id: 10,
        state: "estado",
        type: "text",
        placeholder: "Estado",
        label: "Estado",
        errorMessage: "Inválido, apenas letras.",
        pattern: "^[a-zA-Z0-9+_.-]+$",
        required: true,
    }, {
        id: 11,
        password: "password",
        type: "password",
        placeholder: "Senha",
        label: "password",
        errorMessage: "Obrigatório, minímo 4 letras",
        pattern: "^[a-zA-Z]+@[a-zA-Z0]+$",
        errorMessage: "Sua senha deve ter entre 6 a 20 caracteres, 1 letra, 1 numero e 1 caracter especial",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
        required: true,
    }, {
        id: 12,
        confirmPassword: "password",
        type: "password",
        placeholder: "Senha",
        label: "password",
        errorMessage: "Inválido.",
        pattern: values.password,
        required: true,
    },
]









    return (
        <Container>
            <Wrapper>
                <Title>Cria minha conta</Title>
                <Form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <Forms
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <Agreement>
                        Ao criar a conta estou de acordo com a <b>Política de Privacidade</b>.
                    </Agreement>
                    <Button onClick={handleClick} >Criar</Button>
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