/* //4 - Desenvolvimento de Sistema de Gerenciamento de Projetos para a Empresa Sem Bagunça
class Projetos {
    andamento: string;
    nomeProjeto: string;
    discricaoProjeto: string;
    equipe: string;
    progresso: string;
    objetivos: string;
    prazo: Date;
    statusProjeto: string;

    constructor(andamento: string, nomeProjeto: string, discricaoProjeto: string, equipe: string, progresso: string, objetivos: string, prazo: Date, statusProjeto: string) {
        this.andamento = andamento;
        this.nomeProjeto = nomeProjeto;
        this.discricaoProjeto = discricaoProjeto;
        this.equipe = equipe;
        this.progresso = progresso;
        this.objetivos = objetivos;
        this.prazo = prazo;
        this.statusProjeto= statusProjeto;

    }
}

class Tarefas {
    descricao:string;
    responsavel:string;
    prazo:Date;
    status:string;



    constructor(descricao:string , responsavel:string , prazo:Date ,status:string) {
        this.descricao=descricao;
        this.responsavel=responsavel;
        this.prazo=prazo;
        this.status=status;

    }
}

class Comunicacao{
    mensagens:string;
    reuniao:string;

    constructor(mensagens:string, reuniao:string){
        this.mensagens=mensagens;
        this.reuniao=reuniao;

    }
} */