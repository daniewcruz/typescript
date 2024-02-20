//1 - Desenvolvimento de Sistema de Cadastro para o Hospital Chega Doente Sai Bom
class Funcionario{
    nome: string;
    cpf: string;
    idade: number;
    genero: string;
    cargo: string;
    departamento: string;
    salario: number;
    email: string;
    telefone: string;
    endereco: string;
    constructor(nome: string, cpf: string, idade: number,genero: string, cargo: string,  departamento: string,salario: number, email: string, telefone: string,endereco: string){
        this.nome = nome,
        this.cpf = cpf,
        this.idade = idade,
        this.genero = genero,
        this.cargo = cargo,
        this.departamento = departamento,
        this.salario = salario,
        this.email = email,
        this.telefone = telefone
        this.endereco = endereco 
    }
}

const funcionario = new Funcionario('Daniel','12345678901',25,'M','medico','clinico geral',5700,'daniewcruz.gmail.com','84994553966','rua araucaria')

 console.log(funcionario)

 class Paciente{
    nome: string;
    dataDeNascimento: Date;
    genero:string
    cpf: string;
    endereco: string;
    telefone: number;
    email: string;
    historicomedico: string;
    alergias: string;
    problemasdesaude: string;
    medicamentosatuais: string;
    constructor(nome: string, dataDeNascimento: Date, genero: string, cpf: string, endereco: string, telefone: number, email: string, historicomedico: string, alergias: string, problemasdesaude: string, medicamentosatuais: string){
        this.nome = nome,
        this.dataDeNascimento = dataDeNascimento,
        this.genero = genero,
        this.cpf = cpf,
        this.endereco = endereco,
        this.telefone = telefone,
        this.email = email,
        this.historicomedico = historicomedico
        this.alergias = alergias,
        this.problemasdesaude = problemasdesaude,
        this.medicamentosatuais = medicamentosatuais
        
    }
}

const paciente = new Paciente('fabricio', new Date('1995-8-25'),'M','003272887680','alto da torre',8496195808,'fabricioagiota@gmail.com', 'calazar', 'agua','artrite', 'dipirona')

console.log(paciente)


class Consultas{
    exame: string;
    medico: Funcionario
    paciente: Paciente
    local: string
    dataehora: Date 
    statusdaconsulta: string 
    diagnostico: string 
    constructor( exame: string, medico: Funcionario, paciente: Paciente, local: string, dataehora: Date, statusdaconsulta: string, diagnostico: string ){
        this.exame = exame,
        this.medico = medico,
        this.paciente = paciente,
        this.local = local,
        this.dataehora = dataehora
        this.statusdaconsulta = statusdaconsulta
        this.diagnostico = diagnostico

    }
}

const consultas = new Consultas('sangue',funcionario, paciente,'senac zona norte',new Date('2024,2,20T8:30:30'),'confirmado', 'gripe' )

console.log(consultas)
