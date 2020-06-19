import React from 'react';
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  height: 45vw;
  align-items: center;
`
const CampoMensagem = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    height: 80%;
    width: 30vw;
    margin-top: 16px;
    overflow: auto;
    align-items: flex-start;
`
const CampoInput = styled.div`
    display: flex;

`
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
        const novaMensagem = {
          
          Usuario: this.state.Usuario,
          Mensagem: this.state.Mensagem,
          Id: numero++ 

        };

        const novoArrayMensagem = [...this.state.Mensagens, novaMensagem]
        this.setState({Mensagens: novoArrayMensagem, Usuario: "", Mensagem: ""})
    }

    onKeyEnter = (event) => {
         if (event.key === "Enter") {
            const novaMensagem = {
          
                Usuario: this.state.Usuario,
                Mensagem: this.state.Mensagem,
                Id: numero++ 
              };
      
              const novoArrayMensagem = [...this.state.Mensagens, novaMensagem]
              this.setState({Mensagens: novoArrayMensagem, Usuario: "", Mensagem: ""})
    }          
    }


    render() {
        
        return(
            <Container>
                <CampoMensagem>
                    {this.state.Mensagens.map( (mensagem) => {
                        return <div key={mensagem.Id}>{mensagem.Usuario}: {mensagem.Mensagem}</div>
                    })}
                </CampoMensagem>
                <CampoInput>
                <input 
                    type="text" 
                    placeholder="Usuário" 
                    value={this.state.Usuario} 
                    onChange={this.onChangeUsuario}
                />
                <input 
                    type="text" 
                    placeholder="Mensagem" 
                    value={this.state.Mensagem} 
                    onChange={this.onChangeMensagem}
                    onKeyPress={this.onKeyEnter}
                />
                <button onClick={this.adicionarMensagem}>Enviar</button>
                </CampoInput>
            </Container>
        );
        
    }
}

export default Tela