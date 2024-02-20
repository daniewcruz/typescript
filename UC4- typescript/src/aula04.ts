class Carro {
    modelo: string;
    ano: number;
    marca: string;
    preco: number;
    motor: string;
    cor: string;
    constructor(modelo: string, ano: number, marca: string, preco: number, motor: string, cor: string) {
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
        this.preco = preco;
        this.motor = motor;
        this.cor = cor;

    }

}
const carrodev = new Carro('MazdaRx7',1992,'Nissan','48928','')

console.log()