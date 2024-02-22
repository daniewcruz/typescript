"use strict";
//3 - Desenvolvimento de Sistema de Gerenciamento de Finanças Pessoais para o Banco Dinheiro Seguro
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
    hisoricoDespesas;
    historicoReceitas;
    constructor(nome, idade, cpf, endereco, telefone, email, genero, metas, historicoConta, historicoDespesas, historicoReceitas) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.genero = genero;
        this.metas = metas;
        this.historicoConta = historicoConta;
        this.hisoricoDespesas = historicoDespesas;
        this.historicoReceitas = historicoReceitas;
    }
}
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
class Despesas {
    despesas;
    dataDaTransacao;
    categoria;
    status;
    metodoPagamento;
    beneficiario;
    constructor(despesas, dataDaTransacao, categoria, status, metodoPagamento, beneficiario) {
        this.despesas = despesas,
            this.dataDaTransacao = dataDaTransacao,
            this.categoria = categoria,
            this.status = status;
        this.metodoPagamento = metodoPagamento;
        this.beneficiario = beneficiario;
    }
}
class Receitas {
    valor;
    dataDaTransacao;
    categoria;
    status;
    metodoRecebimento;
    contaDestino;
    constructor(valor, dataDaTransacao, categoria, status, metodoRecebimento, contaDestino) {
        this.valor = valor,
            this.dataDaTransacao = dataDaTransacao,
            this.categoria = categoria,
            this.status = status,
            this.metodoRecebimento = metodoRecebimento,
            this.contaDestino = contaDestino;
    }
}
