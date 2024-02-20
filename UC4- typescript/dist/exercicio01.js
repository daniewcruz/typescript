"use strict";
class Funcionario {
    nome;
    idade;
    cpf;
    cargo;
    salario;
    departamento;
    endereco;
    email;
    telefone;
    genero;
    constructor(nome, idade, cpf, cargo, salario, departamento, endereco, email, telefone, genero) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.cargo = cargo;
        this.salario = salario;
        this.departamento = departamento;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.genero = genero;
    }
}
class Consulta {
    local;
    dataehorario;
    medico;
    informacaoPaciente;
    exame;
    resultado;
    statusConsulta;
    constructor(local, dataehorario, medico, informacaoPaciente, exame, resultado, statusConsulta) {
        this.local = local;
        this.dataehorario = dataehorario;
        this.medico = medico;
        this.informacaoPaciente = informacaoPaciente;
        this.exame = exame;
        this.resultado = resultado;
        this.statusConsulta = statusConsulta;
    }
}
class Paciente {
    nome;
    idade;
    dataDeNascimento;
    cpf;
    endereco;
    contato;
    sintomas;
    constructor(nome, idade, dataDeNascimeto, cpf, endereco, contato, sintomas) {
        this.nome = nome;
        this.idade = idade;
        this.dataDeNascimento = dataDeNascimeto;
        this.cpf = cpf;
        this.endereco = endereco;
        this.contato = contato;
        this.sintomas = sintomas;
    }
}
