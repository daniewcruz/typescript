//3 - Desenvolvimento de Sistema de Gerenciamento de Finanças Pessoais para o Banco Dinheiro Seguro
class Contas {
    saldo: number;
    tipoConta: string;
    titularidade: Cliente;
    transacoes: string;

    constructor(saldo: number, tipoConta: string, titularidade: Cliente, transacoes: string) {
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.titularidade = titularidade;
        this.transacoes = transacoes;

    }
}


class Cliente {
    nome: string;
    idade: string;
    cpf: string;
    endereco: string;
    telefone: number;
    email: string;
    genero: string;
    metas: string;
    historicoConta: Contas;
    hisoricoDespesasERecitas: DespesaERecitas;

    constructor(nome: string, idade: string, cpf: string, endereco: string, telefone: number, email: string, genero: string, metas: string, historicoConta: Contas, hisoricoDespesasERecitas: DespesaERecitas) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.genero = genero;
        this.metas = metas;
        this.historicoConta = historicoConta;
        this.hisoricoDespesasERecitas= hisoricoDespesasERecitas;

    }
}

class DespesaERecitas {
    dispesas: number;
    receitas: number;


    constructor(dispesas: number, receitas: number) {
        this.dispesas = dispesas;
        this.receitas = receitas;

    }
}