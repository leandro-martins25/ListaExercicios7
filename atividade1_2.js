class Membro {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    aplicarDesconto() {
        if (this.idade >= 18) {
            return `${this.nome} não tem desconto, pois é maior de idade.`;
        } else {
            return `${this.nome} é beneficiado pelo desconto especial do Centro de Treinamento, pois é menor de idade.`;
        }
    }

    calcularIMC() {
        const IMC = this.peso / (this.altura ** 2);
        return `Seu IMC é ${IMC.toFixed(2)}`;
    }
}

const membro1 = new Membro('Leandro', 25, 80, 1.85);
console.log(membro1.aplicarDesconto());
console.log(membro1.calcularIMC());

const membro2 = new Membro('Fernando', 17, 70, 1.70);
console.log(membro2.aplicarDesconto());
console.log(membro2.calcularIMC());
