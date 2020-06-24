import React from "react"
import styled from "styled-components"

const MensagemUsuario = styled.div`
    display:flex;
    background-color: #DCF8C6;
    height: fit-content;
    flex-wrap: wrap;
    border-radius: 16px;
    padding: 8px;
    margin: 16px;
    align-self: flex-end;
`;

const MensagemRecebida = styled.div`
    display:flex;
    height: fit-content;
    flex-wrap: wrap;
    padding: 8px;
    margin: 16px;
    border-radius: 16px;
    background-color: #FFFFFF;
`;



function Mensagem(props) {
    let Mensagens = props.Mensagens;
   
    return  (
        Mensagens.map( (mensagem,i ,a)=>{
            let b = i;
            if( mensagem.Usuario === "eu"){
                return( 
                <MensagemUsuario 
                    key={mensagem.Id} 
                    onDoubleClick={(event) => props.handleClick(event)}>
                    {mensagem.Mensagem}
                </MensagemUsuario>
                );
            }
            else { 
                return(  
                    <MensagemRecebida 
                    key={mensagem.Id} 
                    onDoubleClick={(event) => props.handleClick(event)}>
                    {mensagem.Usuario}:<br/>{mensagem.Mensagem}
                    </MensagemRecebida>
                );
            }
        
        })
    );
}

export default Mensagem