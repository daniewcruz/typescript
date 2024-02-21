//1 - Desenvolvimento de Sistema de Cadastro para o Hospital Chega Doente Sai Bom
class Funcionario {
    nome: string;
    cpf: string;
    dataDeNascimento: Date;
    genero: string;
    cargo: string;
    departamento: string;
    salario: number;
    email: string;
    telefone: string;
    endereco: string;
    //metodo construtor da classe Funcionario
    constructor(nome: string, cpf: string, dataDeNascimento: Date, genero: string, cargo: string, departamento: string, salario: number, email: string, telefone: string, endereco: string) {
        this.nome = nome,
        this.cpf = cpf,
        this.dataDeNascimento = dataDeNascimento,
        this.genero = genero,
        this.cargo = cargo,
        this.departamento = departamento,
        this.salario = salario,
        this.email = email,
        this.telefone = telefone
        this.endereco = endereco
    }
    mostrarDados() {
        console.log('dados do funcionario:')
        console.log(`nome______________: ${this.nome}`)
        console.log(`CPF_______________: ${this.cpf}`)
        console.log(`Data de nascimento: ${this.dataDeNascimento.toLocaleDateString('pt-br')}`)
        console.log(`genero____________: ${this.genero}`)
        console.log(`cargo_____________: ${this.cargo}`)
        console.log(`departamento______: ${this.departamento}`)
        console.log(`salario___________: ${this.salario}`)
        console.log(`Email_____________: ${this.email}`)
        console.log(`Telefone__________: ${this.telefone}`)
        console.log(`Endereço__________: ${this.endereco}`)
        console.log(`-----------------------------------------------------------------------------------`)

    }

}

const funcionario = new Funcionario('Daniel', '12345678901', new Date(2024, 2, 21), 'M', 'Médico', 'clinico geral', 5700, 'daniewcruz.gmail.com', '84994553966', 'rua araucaria')

console.log(funcionario.mostrarDados())

class Paciente {
    nome: string;
    dataDeNascimento: Date;
    genero: string
    cpf: string;
    endereco: string;
    telefone: number;
    email: string;
    historicoMedico: string;
    alergias: string;
    problemasDeSaude: string;
    medicamentosAtuais: string;
    constructor(nome: string, dataDeNascimento: Date, genero: string, cpf: string, endereco: string, telefone: number, email: string, historicoMedico: string, alergias: string, problemasDeSaude: string, medicamentosAtuais: string) {
        this.nome = nome,
        this.dataDeNascimento = dataDeNascimento,
        this.genero = genero,
        this.cpf = cpf,
        this.endereco = endereco,
        this.telefone = telefone,
        this.email = email,
        this.historicoMedico = historicoMedico
        this.alergias = alergias,
        this.problemasDeSaude = problemasDeSaude,
        this.medicamentosAtuais = medicamentosAtuais
    }
    mostrarDados(){
        console.log(`Dados do paciente:`)
        console.log(`Nome_______________: ${this.nome}`)
        console.log(`Data de nascimento_: ${this.dataDeNascimento.toLocaleDateString('pt-br')}`)
        console.log(`genero_____________: ${this.genero}`)
        console.log(`CPF________________: ${this.cpf}`)
        console.log(`Endereço___________: ${this.endereco}`)
        console.log(`Telefone___________: ${this.telefone}`)
        console.log(`Email______________: ${this.email}`)
        console.log(`Histórico médico___: ${this.historicoMedico}`)
        console.log(`Alergias___________: ${this.alergias}`)
        console.log(`Problemas de saúde_: ${this.problemasDeSaude}`)
        console.log(`Medicamentos atuais: ${this.medicamentosAtuais}`)
        console.log(`----------------------------------------------------------------------------`)

    }
}

const paciente = new Paciente('fabricio', new Date('1995-8-25'), 'M', '003272887680', 'alto da torre', 8496195808, 'fabricioagiota@gmail.com', 'calazar', 'agua', 'artrite', 'dipirona')

console.log(paciente.mostrarDados())


class Consultas {
    exame: string;
    medico: Funcionario
    paciente: Paciente
    local: string
    dataHora: Date
    statusdaconsulta: string
    diagnostico: string
    constructor(exame: string, medico: Funcionario, paciente: Paciente, local: string, dataHora: Date, statusdaconsulta: string, diagnostico: string) {
        this.exame = exame,
        this.medico = medico,
        this.paciente = paciente,
        this.local = local,
        this.dataHora = dataHora
        this.statusdaconsulta = statusdaconsulta
        this.diagnostico = diagnostico
    }
    mostardados(){
        console.log(`Consultas__:`)
        console.log(`Exame______: ${this.exame}`)
        console.log(`Médico_____: ${this.medico}`)
        console.log(`Paciente___: ${this.paciente}`)
        console.log(`Local______: ${this.exame}`)
        console.log(`Data e hora: ${this.exame}`)
        console.log(`Exame: ${this.exame}`)
        console.log(`Exame: ${this.exame}`)
        

        

    }
}

const consultas = new Consultas('sangue', funcionario, paciente, 'senac zona norte', new Date('2024,2,20T8:30:30'), 'confirmado', 'gripe')

//console.log(consultas)
