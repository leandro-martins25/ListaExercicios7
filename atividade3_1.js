class Calculadora {
    raizQuadrada(numero) {
        return Math.sqrt(numero).toFixed(2);
    }

    potencia(base, expoente) {
        return Math.pow(base, expoente);
    }

    somar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        return a / b;
    }
}

const calculadora1 = new Calculadora();
console.log(calculadora1.raizQuadrada(4));

const calculadora2 = new Calculadora();
console.log(calculadora2.potencia(3, 4));

const calculadora3 = new Calculadora();
console.log(calculadora3.subtrair(20, 4));

const calculadora4 = new Calculadora();
console.log(calculadora4.multiplicar(4, 3));

const calculadora5 = new Calculadora();
console.log(calculadora5.dividir(10, 2));
