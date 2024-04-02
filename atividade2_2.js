class Livro {
    constructor(titulo, autor, preco){
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    exibirInformacoes(){
        return `O livro ${this.titulo} foi escrito por ${this.autor} e custa ${this.preco} reais na Amazon`;
    }
}

class LivroFisico extends Livro{
    constructor(titulo,autor,preco,peso){
        super(titulo,autor,preco);

        this.peso = peso;
    }
    calcularEnvio(){
    }
}

class Ebook extends Livro{
    constructor(titulo, autor, preco,tamanhoMB){
        super(titulo,autor,preco);

        this.tamanhoMB;
    }
    verificarTamanhoEbook(){
    }
}

const livro = new Livro('Programação Orientada a Objetos', 'Sérgio Furgeri', 115);
console.log(livro.exibirInformacoes());