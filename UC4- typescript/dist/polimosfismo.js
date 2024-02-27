"use strict";
/* import { Funcionario } from './exercicio01'



class Desenvolvedor extends Funcionario {
    linguagens: string[];
    projetos: string[];
    anoExperiencia: number
    especializacoes: string[];
    habilidades: string[];
    constructor(
        linguagens: string[],
        projetos: string[],
        anoExperiencia: number,
        especializacoes: string[],
        habilidades: string[],
        nome: string,
        cpf: string,
        dataDeNascimento: Date,
        cargo: string,
        setor: string,
        email: string,
        telefone: string,
        endereco: string[],
        matricula: string,
        genero?: string) {

        super(nome, cpf, dataDeNascimento, cargo, setor, email, telefone, endereco, matricula, genero)
        this.linguagens = linguagens;
        this.projetos = projetos;
        this.anoExperiencia = anoExperiencia;
        this.especializacoes = especializacoes;
        this.habilidades = habilidades;
    }
    mostrarDados() {
        console.log(`-------------------------------------------------------------------------------`)
    
        super.mostrarDados()
        console.log(`Linguagens_________: ${this.linguagens} `)
        console.log(`Projetos___________: ${this.projetos}`)
        console.log(`Ano de experiencia_: ${this.anoExperiencia}`)
        console.log(`Especializações____: ${this.especializacoes}`)
        console.log(`Habilidade_________: ${this.habilidades}`)
        console.log(`------------------------------------------------------------------------------------`)

    }


}

const desenvolvedor = new Desenvolvedor(['Javascript'], ['cassino online'], 3, ['mobile'], ['inglês avançado', 'metodologias ageis'], 'fulano', '12345678111', new Date('1950-02-23'), 'Desenvolvedor', 'backend', 'fulano@gmail.com', '8499999999', ['rua macaé'], '22111')


desenvolvedor.mostrarDados()


class Frontend extends Desenvolvedor {
    tecnologias: string[];
    frameworks: string[];
    conhecimentos: string[];
    constructor(tecnologias: string[],
        frameworks: string[],
        conhecimentos: string[], linguagens: string[],
        projetos: string[],
        anoExperiencia: number,
        especializacoes: string[],
        habilidades: string[],
        nome: string,
        cpf: string,
        dataDeNascimento: Date,
        cargo: string,
        setor: string,
        email: string,
        telefone: string,
        endereco: string[],
        matricula: string,
        genero?: string) {

        super(linguagens, projetos, anoExperiencia, especializacoes, habilidades, nome, cpf, dataDeNascimento, cargo, setor, email, telefone, endereco, matricula, genero)
        this.tecnologias = tecnologias;
        this.frameworks = frameworks;
        this.conhecimentos = conhecimentos;
    }
    mostrarDados(){

        console.log(`-----------------------Dados do frontend------------------------`)
        super.mostrarDados()
        console.log(`Tecnologias_________: ${this.tecnologias} `)
        console.log(`Framework___________: ${this.frameworks}`)
        console.log(`Conhecimentos_______: ${this.conhecimentos}`)
        console.log(`------------------------------------------------------------------------------------`)
    }
}
const frontend = new Frontend( ['HTML', 'CSS', 'JavaScript'],
['React', 'Angular'],
['UI/UX'],
['JavaScript', 'TypeScript'],
['Projeto 1', 'Projeto 2'],
3,
['Otimização de Performance Frontend'],
['Comunicação', 'Resolução de Problemas'],
'Fulano de Tal',
'123456789',
new Date('1990-01-01'),
'Desenvolvedor Frontend',
'TI',
'fulano@example.com',
'123-456-7890',
['Rua Principal, 123', 'Cidade', 'País'],
'123456','M')

frontend.mostrarDados()


class Backend extends Desenvolvedor{
    bancoDeDados: string[];
    framework: string[];
    conhecimentos: string[];
    seguranca: string[];
    constructor( bancoDeDados: string[],
        framework: string[],
        conhecimentos: string[],
        seguranca: string[],
        linguagens: string[],
        projetos: string[],
        anoExperiencia: number,
        especializacoes: string[],
        habilidades: string[],
        nome: string,
        cpf: string,
        dataDeNascimento: Date,
        cargo: string,
        setor: string,
        email: string,
        telefone: string,
        endereco: string[],
        matricula: string,
        genero?: string){
        
        super(linguagens, projetos, anoExperiencia, especializacoes, habilidades, nome, cpf, dataDeNascimento, cargo, setor, email, telefone, endereco, matricula, genero)
        
        this.bancoDeDados = bancoDeDados;
        this.framework = framework;
        this.conhecimentos = conhecimentos;
        this.seguranca = seguranca
    }
    mostrarDados() {
        console.log(`-----------------------Dados do backend------------------------`);
        super.mostrarDados();
        console.log(`Banco de Dados______: ${this.bancoDeDados}`);
        console.log(`Framework___________: ${this.framework}`);
        console.log(`Conhecimentos_______: ${this.conhecimentos}`);
        console.log(`Segurança___________: ${this.seguranca}`);
        console.log(`---------------------------------------------------------------`);
    }
}


const backend = new Backend(
    ['Java', 'Python', 'SQL'], // bancoDeDados
    ['MongoDB', 'Express', 'Node.js'], // framework
    ['Spring Boot', 'Hibernate'], // conhecimentos
    ['RESTful APIs', 'ORM'], // seguranca
    ['JavaScript', 'TypeScript'], // linguagens
    ['Projeto 3', 'Projeto 4'], // projetos
    5, // anoExperiencia
    ['Segurança da Informação', 'Banco de Dados Distribuídos'], // especializacoes
    ['Trabalho em Equipe', 'Resolução de Problemas'], // habilidades
    'Beltrano de Tal', // nome
    '987654321', // cpf
    new Date('1985-05-15'), // dataDeNascimento
    'Desenvolvedor Backend', // cargo
    'TI', // setor
    'beltrano@example.com', // email
    '987-654-3210', // telefone
    ['Avenida Principal, 456', 'Cidade', 'País'], // endereco
    '789012', // matricula
    'M' // genero
);

backend.mostrarDados();
 */ 
