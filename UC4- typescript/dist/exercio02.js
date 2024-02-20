"use strict";
class Livro {
    titulo;
    autor;
    ano;
    categoria;
    editora;
    disponiveis;
    quantidadeDeCopias;
    constructor(titulo, autor, ano, categoria, editora, disponiveis, quantidadeDeCopias) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.categoria = categoria;
        this.editora = editora;
        this.disponiveis = disponiveis;
        this.quantidadeDeCopias = quantidadeDeCopias;
    }
}
class Usuario {
    nome;
    idade;
    telefone;
    endereco;
    historicoDeEmprestimo;
    historicoDeDevolucao;
    constructor(nome, idade, telefone, endereco, historicoDeEmprestimo, historicoDeDevolucao) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.endereco = endereco;
        this.historicoDeEmprestimo = historicoDeEmprestimo;
        this.historicoDeDevolucao = historicoDeDevolucao;
    }
}
class Emprestimos {
    emprestimoRealizados;
    dataEmprestimo;
    dataDevolucao;
    infoUsuario;
    infoLivro;
    constructor(emprestimoRealizados, dataEmprestimo, dataDevolucao, infoUsuario, infoLivro) {
        this.emprestimoRealizados = emprestimoRealizados;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.infoUsuario = infoUsuario;
        this.infoLivro = infoLivro;
    }
}
