//2 - Desenvolvimento de Sistema de Gestão de Biblioteca para a Biblioteca Leitura Certa
class Livro {
    titulo: string;
    autor: string;
    ano: Date;
    categoria: string;
    editora: string;
    disponiveis: boolean;
    quantidadeDeCopias: number;

    constructor(titulo: string, autor: string, ano: Date, categoria: string, editora: string, disponiveis: boolean, quantidadeDeCopias: number) {
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
    nome: string;
    idade: number;
    telefone: number;
    endereco: string;
    historicoDeEmprestimo: string;
    historicoDeDevolucao: string;

    constructor(nome: string, idade: number, telefone: number, endereco: string, historicoDeEmprestimo: string, historicoDeDevolucao: string) {
        this.nome=nome;
        this.idade=idade;
        this.telefone=telefone;
        this.endereco=endereco;
        this.historicoDeEmprestimo=historicoDeEmprestimo;
        this.historicoDeDevolucao=historicoDeDevolucao;

    }
}

class Emprestimos {
    emprestimoRealizados: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    infoUsuario: Usuario;
    infoLivro: Livro;

    constructor(emprestimoRealizados: number ,dataEmprestimo: Date ,dataDevolucao: Date , infoUsuario: Usuario , infoLivro: Livro) {
        this.emprestimoRealizados=emprestimoRealizados;
        this.dataEmprestimo=dataEmprestimo;
        this.dataDevolucao=dataDevolucao;
        this.infoUsuario=infoUsuario;
        this.infoLivro=infoLivro;

    }
}