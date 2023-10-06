'use client'

import { useState } from "react";
import PopUpMessage from "../component/PopUpAula/PopUpAula";

const Teste = () =>{
    const [exibirPopUp, setExibirPopUp] = useState(false);
    const [mensagemPopUp, setMensagemPopUp] = useState('');
    const [tipoPopUp, setTipePopUp] = useState('');

    function handlerExibirPopUp(tipo, mensagem, tempo) {
        setMensagemPopUp(mensagem)
        setTipePopUp(tipo)
        setExibirPopUp(true)
        setTimeout(() =>{
            setExibirPopUp(false);

        },tempo )




    }
    return(
        <div>
            <button onClick= {() =>handlerExibirPopUp('erro', 'deu tudo errado!', 3000)}>exibir popoup Erro</button>
            <button onClick={() => handlerExibirPopUp('sucesso', 'deu tudo certo!', 6000) }>exibir popoup Sucesso</button>
   {
            exibirPopUp &&(
   <PopUpMessage typeColor={tipoPopUp} 
   mensagem={mensagemPopUp}
   
   />
   )}       
 
        </div>
    )
}

export default Teste;