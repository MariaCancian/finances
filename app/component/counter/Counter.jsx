'use client'
import {useState} from 'react'

const Counter = ({padrao, valor, limitMax, limitMin})=>{
    let [contador, setContador] = useState (padrao);

    const addContador = () =>{

        if(contador> limitMax){
            setContador(contador+ valor)
        }else{
            setContador(limitMax)
        }

    }   

    const remove = ()=> {
        if(contador> limitMin){
            setContador(contador - valor)
        }else{
            setContador(limitMin)
        }

    }

    
    const zerar = () => {
        setContador(0)
    }

  



    return(
        <div>
            <p>contador: {contador}</p>
            <button onClick={addContador} >Adicionar</button>
        <button onClick={remove} >Subtrair</button>
        <button onClick={zerar} >Zerar</button>
        </div>
    )
}
export default Counter








