class Carro {
    constructor(marca,modelo,ano){
       this.marca = marca;
       this.modelo = modelo;
       this.ano = ano; 
    }
    obterInformacoes(){
        return `O carro é da marca ${this.marca}, modelo ${this.modelo} e ano ${this.ano} `;
    }
    anosDeUso(){
        //return 'O carro tem ' + (2024 - this.ano) + ' ano de uso.';
        const anoAtual = new Date().getFullYear();
        return 'O mesmo tem ' + (2024 - this.ano) + ' ano de uso.';
    }
}

const carro = new Carro('Ford', 'F-150 Platinum', 2023);
console.log(carro.obterInformacoes());
console.log(carro.anosDeUso());