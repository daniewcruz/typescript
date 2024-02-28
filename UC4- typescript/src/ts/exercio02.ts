abstract class ItemBiblioteca {
    titulo: string;
    autor: string;
    ano: Date;
    categoria: string;
    disponiveis: boolean;
    quantidadeDeCopias: number;

    constructor(titulo: string, autor: string, ano: Date, categoria: string, disponiveis: boolean, quantidadeDeCopias: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.categoria = categoria;
        this.disponiveis = disponiveis;
        this.quantidadeDeCopias = quantidadeDeCopias;
    }
}

class Livro extends ItemBiblioteca {
    editora: string;

    constructor(titulo: string, autor: string, ano: Date, categoria: string, editora: string, disponiveis: boolean, quantidadeDeCopias: number) {
        super(titulo, autor, ano, categoria, disponiveis, quantidadeDeCopias);
        this.editora = editora;
    }
}

class Usuario extends ItemBiblioteca {
    idade: number;
    telefone: number;
    endereco: string;
    historicoDeEmprestimo: string;
    historicoDeDevolucao: string;

    constructor(nome: string, idade: number, telefone: number, endereco: string, historicoDeEmprestimo: string, historicoDeDevolucao: string) {
        super(nome, "", new Date(), "", true, 0); // Ajustar as propriedades comuns de acordo
        this.idade = idade;
        this.telefone = telefone;
        this.endereco = endereco;
        this.historicoDeEmprestimo = historicoDeEmprestimo;
        this.historicoDeDevolucao = historicoDeDevolucao;
    }
}

class Emprestimos {
    emprestimoRealizados: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    infoUsuario: Usuario;
    infoLivro: Livro;

    constructor(emprestimoRealizados: number, dataEmprestimo: Date, dataDevolucao: Date, infoUsuario: Usuario, infoLivro: Livro) {
        this.emprestimoRealizados = emprestimoRealizados;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.infoUsuario = infoUsuario;
        this.infoLivro = infoLivro;
    }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J. R. R. Tolkien', new Date('1937'), 'Fantasia', 'Allen & Unwin', true, 20);
const usuario1 = new Usuario('Maria', 23, 84912345678, 'Rua Araguaia', '3 Emprestimos', '3 Devoluções');
const emprestimos1 = new Emprestimos(60, new Date("2024-9-3"), new Date('2024-9-12'), usuario1, livro1);

console.log(emprestimos1);
