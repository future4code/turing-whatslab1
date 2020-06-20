import React from 'react';
import styled from 'styled-components'
import Mensagem from "./Mensagem"

const Container = styled.div `
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-color: #D7DBD3;
`

const CampoMensagem = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    justify-content:flex-end;
    height: 80%;
    width: 30vw;
    margin-top: 16px;
    overflow: auto;
    align-items: flex-start;
    border-radius: 16px;
    padding: 8px;
    background-color: #D8D0C9;
    box-shadow: 4px 4px black;
`

const CampoInput = styled.div`
    display: flex;
    margin-bottom: 8px;
`

const InputUsuario = styled.input`
    width: 20%;
    height: 100%;
    border-radius: 4px;
    outline: none;
`;

const InputMenssagem = styled.input`
    width: 70%;
    height: 100%;
    border-radius: 4px;
    outline: none;
    
`;

const InputButton = styled.button`
    border-radius: 8px;
    height:120%;
    outline:none;
`;

let numero = 0;

class Tela extends React.Component {
    state = {
    Usuario: "",
    Mensagem: "",
    Mensagens: []
    }

    onChangeUsuario = (event) => {
        this.setState({Usuario: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({Mensagem: event.target.value})
    }

    adicionarMensagem = () => {
        if(this.state.Usuario !== "" && this.state.Mensagem !== ""){ 
            const novaMensagem = {
            Usuario: this.state.Usuario,
            Mensagem: this.state.Mensagem,
            Id: numero++ 
            };
            const novoArrayMensagem = [...this.state.Mensagens, novaMensagem]
            this.setState({Mensagens: novoArrayMensagem, Usuario: "", Mensagem: ""})
        }
    }

    onKeyEnter = (event) => {
       
            if (event.key === "Enter") {
                this.adicionarMensagem()
            }
                  
    }

    handleClickEraseMenssenger = (event) =>{
            event.target.style.display = "none";
    }
    render() {

        return(
            <Container>
                <CampoMensagem>
                    <Mensagem 
                        handleClick={this.handleClickEraseMenssenger}
                        Mensagens={this.state.Mensagens}
                        />
                <CampoInput>
                <InputUsuario 
                    type="text" 
                    placeholder="Usuário" 
                    value={this.state.Usuario} 
                    onChange={this.onChangeUsuario}
                />
                <InputMenssagem 
                    type="text" 
                    placeholder="Mensagem" 
                    value={this.state.Mensagem} 
                    onChange={this.onChangeMensagem}
                    onKeyPress={this.onKeyEnter}
                />
                <InputButton onClick={this.adicionarMensagem}>Enviar</InputButton>
                </CampoInput>
                </CampoMensagem>
            </Container>
        );
        
    }
   
}

export default Tela