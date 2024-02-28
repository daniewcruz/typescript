/* //3 - Desenvolvimento de Sistema de Gerenciamento de Finanças Pessoais para o Banco Dinheiro Seguro

class Cliente {
    nome: string;
    idade: string;
    cpf: string;
    endereco: string;
    telefone: number;
    email: string;
    genero: string;
    metas: string;
    historicoConta: Contas;
    hisoricoDespesas: Despesas
    historicoReceitas: Receitas;

    constructor(nome: string, idade: string, cpf: string, endereco: string, telefone: number, email: string, genero: string, metas: string, historicoConta: Contas, historicoDespesas: Despesas, historicoReceitas: Receitas){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.genero = genero;
        this.metas = metas;
        this.historicoConta = historicoConta;
        this.hisoricoDespesas = historicoDespesas
        this.historicoReceitas= historicoReceitas;

    }
}

class Contas {
    saldo: number;
    tipoConta: string;
    titularidade: Cliente;
    transacoes: string;

    constructor(saldo: number, tipoConta: string, titularidade: Cliente, transacoes: string) {
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.titularidade = titularidade;
        this.transacoes = transacoes;

    }
}



class Despesas {
    despesas: number;
    dataDaTransacao: Date;
    categoria: string;
    status: string;
    metodoPagamento: string
    beneficiario: string

    constructor( despesas: number,dataDaTransacao: Date,categoria: string, status: string, metodoPagamento: string,  beneficiario: string) {
        this.despesas = despesas,
        this.dataDaTransacao = dataDaTransacao,
        this.categoria = categoria,
        this.status = status
        this.metodoPagamento = metodoPagamento
        this.beneficiario = beneficiario

    }
}



class Receitas{
    valor: number
    dataDaTransacao: Date;
    categoria: string;
    status: string;
    metodoRecebimento: string;
    contaDestino: string;

    constructor( valor: number, dataDaTransacao: Date, categoria: string, status: string, metodoRecebimento: string, contaDestino: string){
        this.valor = valor,
        this.dataDaTransacao = dataDaTransacao,
        this.categoria = categoria,
        this.status = status,
        this.metodoRecebimento = metodoRecebimento,
        this.contaDestino = contaDestino

    }
    
} */