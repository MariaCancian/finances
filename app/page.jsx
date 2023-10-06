'use client'
import React from 'react'
import livros from '/data/livros'
import Livro, { ListaLivros } from 'models/Livro'
export default function Home() {
  // console.log(livros);
  const livroteste = new Livro('Livro Teste', 'Autor Teste',)

  const minhaListaLivros = new ListaLivros();

  minhaListaLivros.addLivros(livroteste)

  livros.map((livro) => {
    minhaListaLivros.addLivros(new Livro (livro.titulo , livro.autor))
  })
  console.log(minhaListaLivros);

  return (
    <>
{/* 
      {livros.map((livro) => (
        <div key={livro.id}>
          <p >título  {livro.titulo}</p>
          <p>autor {livro.autor}</p>
        </div>
      ))} */}

{minhaListaLivros.livros.map((livro) => (
        <div key={livro.id}>
          <h1>Livro:{livro.id}</h1>
          <p >título  {livro.titulo}</p>
          <p>autor {livro.autor}</p>
        </div>
      ))}

    </>
  )
}

