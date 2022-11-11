import React from "react";
import styled from "styled-components";

const Text = styled.div`
    padding: 0;
    width: 100vw;
    color: gray;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const Developer = () => {
    return (
        <Text>Desenvolvido por Go.It</Text>
    );
};

export default Developer