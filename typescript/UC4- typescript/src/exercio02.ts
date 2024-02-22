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
      mostrarDados(){
        console.log(`Livro_______________:`)
        console.log(`Título______________: ${this.titulo}`)
        console.log(`Autor_______________: ${this.autor}`)
        console.log(`Ano_________________: ${this.ano}`)
        console.log(`Categoria___________: ${this.categoria}`)
        console.log(`Editora_____________: ${this.editora}`)
        console.log(`Disponiveis_________: ${this.disponiveis}`)
        console.log(`Quantidade de cópias: ${this.quantidadeDeCopias}`)
        console.log(ˋ__________________________________________________ˋ)
      }  
}

const livro = new Livro("Título do Livro", "Autor do Livro", new Date(), "Categoria do Livro", "Editora do Livro", true, 100);

console.log(livro.mostrarDados())

class Usuario {
    nome: string;
    dataDeNascimento: Date;
    telefone: number;
    endereco: string;
    historicoDeEmprestimo: string;
    historicoDeDevolucao: string;

    constructor(nome: string, dataDeNascimento: Date, telefone: number, endereco: string, historicoDeEmprestimo: string, historicoDeDevolucao: string) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.telefone = telefone;
        this.endereco = endereco;
        this.historicoDeEmprestimo = historicoDeEmprestimo;
        this.historicoDeDevolucao = historicoDeDevolucao;
    }
      mostrarDados(){
        console.log(`Usuario________________:`)
        console.log(`Nome___________________: ${this.nome}`)
        console.log(`Data de Nascimento_____: ${this.dataDeNascimento.toLocaleDateString('pt-br')}`)
        console.log(`Telefone_______________: ${this.telefone}`)
        console.log(`Endereço_______________: ${this.endereco}`)
        console.log(`Histórico de emprestimo: ${this.historicoDeEmprestimo}`)
        console.log(`Histórico de devolução: ${this.historicoDeDevolucao}`)
        console.log(`________________________________________________________________________________`)
      }
}

const usuario = new Usuario("Nome do Usuário", 30, 123456789, "Endereço do Usuário", "Histórico de Empréstimo", "Histórico de Devolução");
console.log(usuario.mostrarDados())


class Emprestimos {
    emprestimoRealizados: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    inforUsuario: Usuario;
    inforLivro: Livro;

    constructor(emprestimoRealizados: number ,dataEmprestimo: Date ,dataDevolucao: Date , inforUsuario: Usuario , inforLivro: Livro) {
        this.emprestimoRealizados = emprestimoRealizados;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.inforUsuario = inforUsuario;
        this.inforLivro = inforLivro;
    }
    mostrarDados(){
        console.log(`Emprestimos________________:`)
        console.log(`Emprestimo realizados______: ${this.emprestimoRealizados}`)
        console.log(`Data emprestimo____________: ${this.dataEmprestimo}`)
        console.log(`informação do usuario______: ${this.inforUsuario}`)
        console.log(`Informação do livro________: ${this.inforLivro}`)
        console.log(`________________________________________________________________________________`)
      }
}

const emprestimo = new Emprestimos(1, new Date(), new Date(), usuario, livro);
console.log(emprestimo.mostrarDados())


class Devolucao{
    inforUsuario: Usuario;
    inforLivro: Livro;
    dataEHora: Date; 
    condicaoDoLivro: string;
    multa: string; 
    
    constructor(inforUsuario: Usuario, inforLivro: Livro, dataEHora: Date, condicaoDoLivro: string, multa: string ){
        this.inforUsuario = inforUsuario,
        this.inforLivro = inforLivro,
        this.dataEHora = dataEHora,
        this.condicaoDoLivro = condicaoDoLivro
        this.multa = multa
    }
    mostrarDados(){
        console.log(`Devolução______________:`)
        console.log(`Informação do usuario__: ${this.inforUsuario}`)
        console.log(`Informação de Livro____: ${this.inforLivro`)
        console.log(`Data e hora____________: ${this.dataEHora}`)
        console.log(`Condição do livro______: ${this.condicaoDoLivro}`)
        console.log(ˋMulta__________________: ${this.multa}`)
        console.log(`________________________________________________________________________________`)
      }
} 
const devolucao = new Devolucao(usuario, livro, new Date(), "Boa", "Nenhuma");
console.log(devolucao.mostrarDados())

