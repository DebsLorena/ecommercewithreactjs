import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    label {
        display: none;
    }
    input {
        width: 500px;
        margin: 10px 10px;
        padding: 10px;

    &:invalid[focused="true"]{
        border: 1px solid red;
    }
    &:invalid[focused="true"] ~ span {
        display: block;
    }
}
    span {
        font-size: 12px;
        padding: 3px;
        color: red;
        display: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 480px){
    width: 75%;
    };
`;


const Forms = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (

        <Container>
            <Wrapper>
            <label>{label}</label>
            <input {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
            </Wrapper>
        </Container>
    )
}

export default Forms