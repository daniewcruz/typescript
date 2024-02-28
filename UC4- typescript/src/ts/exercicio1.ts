//1 - Desenvolvimento de Sistema de Cadastro para o Hospital Chega Doente Sai Bom
class Pessoa {

    constructor(
        public nome: string,
        public cpf: string,
        public dataDeNascimento: Date,
        public email: string,
        public endereco: string[],
        public telefone: string,
        public genero?: string
    ) { }

    mostrarDados() { }

}


class Funcionario extends Pessoa {
    matricula: string
    cargo: string;
    //setor: string;

    //metodo construtor da classe Funcionario
    constructor(
        nome: string,
        cpf: string,
        dataDeNascimento: Date,
        cargo: string,
        //setor: string, 
        email: string,
        telefone: string,
        endereco: string[],
        matricula: string,
        genero?: string) {
        super(nome, cpf, dataDeNascimento, email, endereco, telefone, genero);
        this.matricula = matricula;
        this.cargo = cargo;
        //this.setor = setor

    }

    mostrarDados() {

        super.mostrarDados()
        console.log(`Matricula_________: ${this.matricula} `)
        console.log(`Cargo_____________: ${this.cargo}`)



    }

}

const funcionario = new Funcionario('Daniel', '12345678901', new Date('1999-01-08'), 'Médico', 'daniewcruz@gmail.com', '84994553966', ['rua araucaria', '32', 'Potengi'], '123321', 'M')

funcionario.mostrarDados();


class Paciente extends Pessoa {
    historicoMedico: string;
    alergias: string;
    problemasDeSaude: string;
    medicamentosAtuais: string;
    constructor(nome: string, dataDeNascimento: Date, cpf: string, endereco: string[], telefone: string, email: string, historicoMedico: string, alergias: string, problemasDeSaude: string, medicamentosAtuais: string, genero?: string) {
        super(nome, cpf, dataDeNascimento, email, endereco, telefone, genero);
        this.historicoMedico = historicoMedico;
        this.alergias = alergias;
        this.problemasDeSaude = problemasDeSaude;
        this.medicamentosAtuais = medicamentosAtuais;

    }
    mostrarDados() {
        console.log(`------------Dados do paciente------------`)
        console.log(`Nome______________: ${this.nome}`)
        console.log(`CPF_______________: ${this.cpf}`)
        console.log(`Data de nascimento: ${this.dataDeNascimento.toLocaleDateString('pt-BR')}`)
        console.log(`Email_____________: ${this.email}`)
        console.log(`Endereço__________: ${this.endereco}`)
        console.log(`Telefone__________: ${this.telefone}`)

        console.log(`Histórico médico____: ${this.historicoMedico}`)
        console.log(`Alergias____________: ${this.alergias}`)
        console.log(`Problemas de saúde__: ${this.problemasDeSaude}`)
        console.log(`Medicamentos atuais_: ${this.medicamentosAtuais}`)
        if (this.genero) {
            console.log(`Genero______________: ${this.genero}`)
        }
        console.log(`----------------------------------------------------------------------------`)

    }
}

const paciente = new Paciente('fabricio', new Date('1995-8-25'), '003272887680', ['alto da torre'], '8496195808', 'fabricioagiota@gmail.com', 'calazar', 'agua', 'artrite', 'dipirona', 'M')

//
//paciente.mostrarDados()


class Consultas {
    exame: string;
    medico: Funcionario
    paciente: Paciente
    local: string
    dataHora: Date
    statusConsulta: string
    diagnostico: string
    constructor(exame: string, medico: Funcionario, paciente: Paciente, local: string, dataHora: Date, statusConsulta: string, diagnostico: string) {
        this.exame = exame,
            this.medico = medico,
            this.paciente = paciente
        this.local = local,
            this.dataHora = dataHora
        this.statusConsulta = statusConsulta
        this.diagnostico = diagnostico
    }
    mostrarDados() {
        console.log(`------------Consultas------------`)
        console.log(`Exame_____________: ${this.exame}`)
        console.log(`Médico____________: ${this.medico.nome}`)
        console.log(`Paciente__________: ${this.paciente.nome}`)
        console.log(`Local_____________: ${this.local}`)
        console.log(`Data e hora_______: ${this.dataHora.toLocaleDateString('pt-BR')} - ${this.dataHora.toTimeString()}`)
        console.log(`Status da Consulta: ${this.statusConsulta}`)
        console.log(`Diagnostico_______: ${this.diagnostico}`)




    }
}

const consultas = new Consultas('sangue', funcionario, paciente, 'senac zona norte', new Date('2024-02-27T11:12:11'), 'confirmado', 'gripe')

//consultas.mostrarDados()


document.addEventListener('DOMContentLoaded',

    function () {
        const form = document.querySelector('#formFuncionario');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const nome = (document.getElementById('nome') as HTMLInputElement).value
                const email = (document.getElementById('email') as HTMLInputElement).value
                const telefone = (document.getElementById('telefone') as HTMLInputElement).value
                const dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value
                const endereco = (document.getElementById('endereco') as HTMLInputElement).value
                const cpf = (document.getElementById('cpf') as HTMLInputElement).value
                const genero = (document.getElementById('genero') as HTMLSelectElement).value
                const cargo = (document.getElementById('cargo') as HTMLInputElement).value
                const matricula = (document.getElementById('matricula') as HTMLInputElement).value


                localStorage.setItem('nome', nome);
                localStorage.setItem('email', email);
                localStorage.setItem('telefone', telefone);
                localStorage.setItem('dataNascimento', dataNascimento);
                localStorage.setItem('endereco', endereco);
                localStorage.setItem('cpf', cpf);
                localStorage.setItem('genero', genero);
                localStorage.setItem('cargo', cargo);
                localStorage.setItem('matricula', matricula);

                window.location.href = './funcionario.html';
            });
        } else {
            console.error('O formulario não foi encontrado.')
        }
    });