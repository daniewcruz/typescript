"use strict";
//2 - Desenvolvimento de Sistema de Gestão de Biblioteca para a Biblioteca Leitura Certa
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
const livro = new Livro("Título do Livro", "Autor do Livro", new Date(), "Categoria do Livro", "Editora do Livro", true, 100);
console.log(livro);
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
const usuario = new Usuario("Nome do Usuário", 30, 123456789, "Endereço do Usuário", "Histórico de Empréstimo", "Histórico de Devolução");
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
const emprestimo = new Emprestimos(1, new Date(), new Date(), usuario, livro);
class Devolucao {
    inforUsuario;
    infoLivro;
    dataEHora;
    condicaoDoLivro;
    multa;
    constructor(inforUsuario, infoLivro, dataEHora, condicaoDoLivro, multa) {
        this.inforUsuario = inforUsuario,
            this.infoLivro = infoLivro,
            this.dataEHora = dataEHora,
            this.condicaoDoLivro = condicaoDoLivro;
        this.multa = multa;
    }
}
const devolucao = new Devolucao(usuario, livro, new Date(), "Boa", "Nenhuma");
