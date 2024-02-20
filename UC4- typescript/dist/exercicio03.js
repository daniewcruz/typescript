"use strict";
class Contas {
    saldo;
    tipoConta;
    titularidade;
    transacoes;
    constructor(saldo, tipoConta, titularidade, transacoes) {
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.titularidade = titularidade;
        this.transacoes = transacoes;
    }
}
class Cliente {
    nome;
    idade;
    cpf;
    endereco;
    telefone;
    email;
    genero;
    metas;
    historicoConta;
    hisoricoDespesasERecitas;
    constructor(nome, idade, cpf, endereco, telefone, email, genero, metas, historicoConta, hisoricoDespesasERecitas) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.genero = genero;
        this.metas = metas;
        this.historicoConta = historicoConta;
        this.hisoricoDespesasERecitas = hisoricoDespesasERecitas;
    }
}
class DespesaERecitas {
    dispesas;
    receitas;
    constructor(dispesas, receitas) {
        this.dispesas = dispesas;
        this.receitas = receitas;
    }
}
