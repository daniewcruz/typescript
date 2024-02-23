import { Funcionario } from './exercicio01'



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
        departamento: string,
        email: string,
        telefone: string,
        endereco: string[],
        matricula: string,
        genero?: string) {

        super(nome, cpf, dataDeNascimento, cargo, departamento, email, telefone, endereco, matricula, genero)
        this.linguagens = linguagens;
        this.projetos = projetos;
        this.anoExperiencia = anoExperiencia;
        this.especializacoes = especializacoes;
        this.habilidades = habilidades;
    }
    mostrarDados() {
        console.log(`-------------------------------------------------------------------------------`)
        console.log(`-----------------------Dados do Desenvolvedor------------------------`)
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