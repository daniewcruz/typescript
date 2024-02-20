"use strict";
class Carro {
    modelo;
    ano;
    marca;
    preco;
    motor;
    cor;
    constructor(modelo, ano, marca, preco, motor, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.preco = preco;
        this.motor = motor;
        this.cor = cor;
    }
}
const carrodev = new Carro('MazdaRx7', 1992, 'Nissan', '48928', '');
console.log();
