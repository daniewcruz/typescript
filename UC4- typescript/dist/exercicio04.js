"use strict";
class Projetos {
    andamento;
    nomeProjeto;
    discricaoProjeto;
    equipe;
    progresso;
    objetivos;
    prazo;
    statusProjeto;
    constructor(andamento, nomeProjeto, discricaoProjeto, equipe, progresso, objetivos, prazo, statusProjeto) {
        this.andamento = andamento;
        this.nomeProjeto = nomeProjeto;
        this.discricaoProjeto = discricaoProjeto;
        this.equipe = equipe;
        this.progresso = progresso;
        this.objetivos = objetivos;
        this.prazo = prazo;
        this.statusProjeto = statusProjeto;
    }
}
class Tarefas {
    descricao;
    responsavel;
    prazo;
    status;
    constructor(descricao, responsavel, prazo, status) {
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.prazo = prazo;
        this.status = status;
    }
}
class Comunicacao {
    mensagens;
    reuniao;
    constructor(mensagens, reuniao) {
        this.mensagens = mensagens;
        this.reuniao = reuniao;
    }
}
