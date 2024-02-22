"use strict";
//1 - Desenvolvimento de Sistema de Cadastro para o Hospital Chega Doente Sai Bom
class Pessoa {
    nome;
    cpf;
    dataDeNascimento;
    email;
    endereco;
    telefone;
    genero;
    constructor(nome, cpf, dataDeNascimento, email, endereco, telefone, genero) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
        this.genero = genero;
    }
    mostrarDados() {
        console.log(`Nome______________: ${this.nome}`);
        console.log(`CPF_______________: ${this.cpf}`);
        console.log(`Data de nascimento: ${this.dataDeNascimento.toLocaleDateString('pt-BR')}`);
        console.log(`Email_____________: ${this.email}`);
        console.log(`Endereço__________: ${this.endereco}`);
        console.log(`Telefone__________: ${this.telefone}`);
        if (this.genero) {
            console.log(`Genero________: ${this.genero}`);
        }
    }
}
class Funcionario extends Pessoa {
    matricula;
    cargo;
    departamento;
    //metodo construtor da classe Funcionario
    constructor(nome, cpf, dataDeNascimento, cargo, departamento, email, telefone, endereco, matricula, genero) {
        super(nome, cpf, dataDeNascimento, email, endereco, telefone, genero);
        this.matricula = matricula;
        this.cargo = cargo;
        this.departamento = departamento;
    }
    mostrarDados() {
        console.log(`------------Dados do funcionario-------------`);
        super.mostrarDados();
        console.log(`Matricula_________: ${this.matricula} `);
        console.log(`Cargo_____________: ${this.cargo}`);
        console.log(`Departamento______: ${this.departamento}`);
        console.log(`------------------------------------------------------------------------------------`);
    }
}
const funcionario = new Funcionario('Daniel', '12345678901', new Date('1999-01-08'), 'Médico', 'pediatrico', 'daniewcruz@gmail.com', '84994553966', ['rua araucaria', '32', 'Potengi'], '123321', 'M');
funcionario.mostrarDados();
class Paciente extends Pessoa {
    historicoMedico;
    alergias;
    problemasDeSaude;
    medicamentosAtuais;
    constructor(nome, dataDeNascimento, cpf, endereco, telefone, email, historicoMedico, alergias, problemasDeSaude, medicamentosAtuais, genero) {
        super(nome, cpf, dataDeNascimento, email, endereco, telefone, genero);
        this.historicoMedico = historicoMedico;
        this.alergias = alergias;
        this.problemasDeSaude = problemasDeSaude;
        this.medicamentosAtuais = medicamentosAtuais;
    }
    mostrarDados() {
        console.log(`------------Dados do paciente------------`);
        super.mostrarDados();
        console.log(`Histórico médico____: ${this.historicoMedico}`);
        console.log(`Alergias____________: ${this.alergias}`);
        console.log(`Problemas de saúde__: ${this.problemasDeSaude}`);
        console.log(`Medicamentos atuais_: ${this.medicamentosAtuais}`);
        if (this.genero) {
            console.log(`Genero_____________: ${this.genero}`);
        }
        console.log(`----------------------------------------------------------------------------`);
    }
}
const paciente = new Paciente('fabricio', new Date('1995-8-25'), '003272887680', ['alto da torre'], '8496195808', 'fabricioagiota@gmail.com', 'calazar', 'agua', 'artrite', 'dipirona', 'M');
paciente.mostrarDados();
class Consultas {
    exame;
    medico;
    paciente;
    local;
    dataHora;
    statusConsulta;
    diagnostico;
    constructor(exame, medico, paciente, local, dataHora, statusConsulta, diagnostico) {
        this.exame = exame,
            this.medico = medico,
            this.paciente = paciente;
        this.local = local,
            this.dataHora = dataHora;
        this.statusConsulta = statusConsulta;
        this.diagnostico = diagnostico;
    }
    mostrarDados() {
        console.log(`------------Consultas------------`);
        console.log(`Exame_____________: ${this.exame}`);
        console.log(`Médico____________: ${this.medico.nome}`);
        console.log(`Paciente__________: ${this.paciente.nome}`);
        console.log(`Local_____________: ${this.local}`);
        console.log(`Data e hora_______: ${this.dataHora.toLocaleDateString('pt-BR')} - ${this.dataHora.toTimeString()}`);
        console.log(`Status da Consulta: ${this.statusConsulta}`);
        console.log(`Diagnostico_______: ${this.diagnostico}`);
    }
}
const consultas = new Consultas('sangue', funcionario, paciente, 'senac zona norte', new Date('2024-02-27T11:12:11'), 'confirmado', 'gripe');
consultas.mostrarDados();
