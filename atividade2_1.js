class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInformacoes() {
        return `O ${this.nome} tem ${this.idade} anos de idade,`;
    }
}

class Mamifero extends Animal {
    constructor(nome, idade, tipoDePelo, somCaracteristico) {
        super(nome, idade);

        this.tipoDePelo = tipoDePelo;
        this.somCaracteristico = somCaracteristico;
    }
    
    exibirInformacoes() {
        return `O ${this.nome} tem ${this.idade} anos de idade, pelo ${this.tipoDePelo}`;
    }

    obterSomCaracteristico() {
        return `e seu som característico é ${this.somCaracteristico}.`;
    }
}

class Ave extends Animal {
    constructor(nome, idade, tipoDeBico, voa) {
        super(nome, idade);

        this.tipoDeBico = tipoDeBico;
        this.voa = voa;
    }

    voar() {
        if (this.voa) {
            return `e pode voar.`;
        } else {
            return `e não voa.`;
        }
    }
}

const ave1 = new Ave('Águia', 20, 'Curvo', true);
const ave2 = new Ave('Pinguim', 10, 'Reto', false);

console.log(ave1.exibirInformacoes(), ave1.voar());
console.log(ave2.exibirInformacoes(), ave2.voar());

const mamifero1 = new Mamifero('Gato', 2, 'Felpudo', 'Miado');
console.log(mamifero1.exibirInformacoes(), mamifero1.obterSomCaracteristico());
