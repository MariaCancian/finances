"use client"
import { useState } from 'react'
import styles from './finances.module.css'
import ListaTransacao from '@/models/ListaTransacao'

import { FaPen, FaTrash } from 'react-icons/fa'
import DashCard from '../component/dashcard/DashCard'
import Inputs from '../component/inputs/Inputs'
import Buttons from '../component/buttons/Buttons'
import BigCard from '../component/bigcard/BigCard'
import HeaderFinances from '../component/headerfinances/HeaderFinances'

const listatransacao = new ListaTransacao();

function Finances() {
  // Inputs
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  //Dados da classe
  const [lista, setLista] = useState(listatransacao.getHistorico());
  const [saldo, setsaldo] = useState(listatransacao.saldo);
  const [receitas, setReceitas] = useState(listatransacao.receitas);
  const [despesas, setDespesas] = useState(listatransacao.despesas);

  // Edição
  const [flag, setFlag] = useState(0)
  const [editButton, setEditButton] = useState(false)

  //adicionar receita

  const addReceita = () => {
    // console.log("adicionou receita");
    listatransacao.adicionarTransacao(description, value, "receita")
    setDescription('');
    setValue('');

    setsaldo(listatransacao.saldo);
    setReceitas(listatransacao.receitas);
    setDespesas(listatransacao.despesas);
    setLista(listatransacao.historico);


  }



  //adicionar despesa

  const addDespesa = () => {

    listatransacao.adicionarTransacao(description, value, "Despesa")
    atualizarValores();


    // console.log("adicionou despesa");
  }

  const exclude = (id) => {
    listatransacao.excluirTransacao(id)

    atualizarValores();
  }

  const edit = (id) =>{
    const transacao = listatransacao.getTransacaoPorId(id);
    setDescription(transacao.descricao)
    setValue(transacao.valor)

    setEditButton(true)
    setFlag(id)
  }

  const update = () =>{
    listatransacao.atualizarTransacao(flag, description, value);
    atualizarValores();
    setEditButton(false);
    setFlag(0);
  }

  const atualizarValores = () => {

    setDescription('');
    setValue('');

    setsaldo(listatransacao.saldo);
    setReceitas(listatransacao.receitas);
    setDespesas(listatransacao.despesas);
    setLista(listatransacao.getHistorico());


  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <HeaderFinances nome={'olá, Cancian'} email={'dev.mariacancian@gmail'}  />
      
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>
            <div className={styles.description}>
             
              
              <Inputs valor={description} tipo={"text"} nome={'description'} plh={'descrição'} on ={(e) => setDescription(e.target.value)} />
              <Inputs valor={value} tipo={"number"} nome={'description'} plh={'Valor (R$)'} on ={(e) => setValue(e.target.value)} />

            </div>
            <div className={styles.type}>
              {
                editButton ? (
                  <button onClick={update} className={styles.buttonAtualizar} >Atualizar</button>
                ) : (
                  <>
                  <Buttons on={addReceita} text={"Receita" } cor={'#9fe0b1'} />
                  <Buttons on={addDespesa} text={"Despesas" } cor={'#e09f9f'} />
                   
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className={styles.infos}>
          <DashCard titulo = {"saldo"} valor = {saldo} cor={"#9fc7e0"} />
          <div className={styles.cardReceitas}>
            <p className={styles.cardTitle}>Receitas</p>
            <p className={styles.cardValue}>R$ {receitas}</p>
          </div>
          <div className={styles.cardDespesas}>
            <p className={styles.cardTitle}>Despesas</p>
            <p className={styles.cardValue}>R$ {despesas}</p>
          </div>
        </div>

        <div className={styles.registros}>
          <div className={styles.registrosreceitas}>
            <BigCard titulo={'receitas registradas'} cor={'#333'}/>
            <div className={styles.registrosreceitaslist}>
              {
                lista.map(transacao => transacao.tipo == "receita" &&
                  (
                    <div key={transacao.id} className={styles.registrosreceitasitem} >
                      <p>{transacao.descricao} </p>
                      <p className={styles.registrosreceitasitemvalue}> R${transacao.valor}</p>

                      <div className={styles.actions}>
                        <button onClick={() => exclude(transacao.id)} className={styles.actionsbutton} >
                          <FaTrash></FaTrash>
                        </button>
                        <div className={styles.actions}>
                          <button onClick={() => edit(transacao.id)} className={styles.actionsbutton}>
                            <FaPen></FaPen>
                          </button>
                        </div>
                      </div>

                    </div>
                  ))
              }

            </div>
          </div>

          <div className={styles.registrosdespesas}>
            <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
            <div className={styles.registrosdespesaslist}>

              {
                lista.map(transacao => transacao.tipo == "Despesa" &&
                  (
                    <div key={transacao.id} className={styles.registrosdespesasitem} >
                      <p>{transacao.descricao} </p>
                      <p className={styles.registrosdespesasitemvalue}> R${transacao.valor}</p>

                      <div className={styles.actions}>
                        <button onClick={() => exclude(transacao.id)} className={styles.actionsbutton}>
                          <FaTrash></FaTrash>
                        </button>

                        <div className={styles.actions}>
                          <button  onClick={() => edit(transacao.id)}  className={styles.actionsbutton}>
                            <FaPen></FaPen>
                          </button>
                        </div>
                      </div>

                      

                    </div>
                  ))
              }


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Finances