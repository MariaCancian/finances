class Livro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor,
        this.id= this.generateId()
    }
    generateId(){
        return Math.floor(Math.random()*10000)
     }

     getInfo(){
        return `Titulo: ${this.titulo},
        Autor : ${this.autor}`
     }
}

export class ListaLivros {
    constructor(){
        this.livros = [];

    }
    addLivros(livro){
        this.livros.push (livro)
    }


}

export default Livro