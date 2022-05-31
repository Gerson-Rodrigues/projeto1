import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  //guardar uma lista de tarefas sem memória
  tarefas : Tarefa[]=[
    {
      idTarefa:1,
      nome:'Aula de Java WebDeveloper',
      data:'2022-05-10',
      hora:'18:00',
      descricao:'Aula de Programação orientada a objetos',
      prioridade:'1'
    },{
      idTarefa:2,
      nome:'Aula de Java Hibernate',
      data:'2022-05-10',
      hora:'15:00',
      descricao:'Prática de controle de emoções',
      prioridade:'2'
    },{
      idTarefa:3,
      nome:'Aula de Angular',
      data:'2022-05-25',
      hora:'10:00',
      descricao:'Parte de FrontEnd',
      prioridade:'1'
    },{
      idTarefa:4,
      nome:'Aula de Java',
      data:'2022-04-11',
      hora:'09:00',
      descricao:'Só pra encher linguiça',
      prioridade:'3'
    },{
      idTarefa:5,
      nome:'Aula de TypeScript',
      data:'2022-05-11',
      hora:'08:00',
      descricao:'Só alegria',
      prioridade:'2'
    }, {
      idTarefa:6,
      nome:'Aula de Comandos DOS',
      data:'2001-01-01',
      hora:'01:00',
      descricao:'Comandos em Ação',
      prioridade:'1'
    },{
      idTarefa:7,
      nome:'Aula de Inglês Técnico',
      data:'2020-08-10',
      hora:'05:00',
      descricao:'Analisando idiomas',
      prioridade:'2'
    },{
      idTarefa:8,
      nome:'Aula de Protótipos',
      data:'2012-05-02',
      hora:'10:00',
      descricao:'Partes Móveis',
      prioridade:'3'
    },{
      idTarefa:9,
      nome:'Aula de HTML5',
      data:'2022-02-11',
      hora:'09:00',
      descricao:'Documentação Completa',
      prioridade:'1'
    },{
      idTarefa:10,
      nome:'Aula de Python',
      data:'2022-03-01',
      hora:'19:00',
      descricao:'Top Demais',
      prioridade:'3'
    },
  ];  //inicializando com um array (lista)
  constructor() { /* TODO document why this constructor is empty */ }

  //criando uma função para capturar um tarefa vinda da página
  //de cadastro e adiciona-la na lista que está em memória.
  addTarefa(item : Tarefa): void{
    //obtendo a quantidade de tarefas cadastradas
    const itemIndex = this.tarefas.length;
    // gerando um id para a tarefa nova
    item.idTarefa = this.getNextId();
    //adcionar a tarefa no final da lista
    this.tarefas[itemIndex] = item;
  }

// excluindo uma tarefa da lista
  delete(item: Tarefa){
    this.tarefas.splice(this.tarefas.indexOf(item),1);
  }
  // criando ua função para atualizar um tarefa
  update(item: Tarefa){
    //prcurar na lista a tarefaque possui o id enviado para edição
    const itemIndex = this.tarefas.findIndex(t => t.idTarefa === item.idTarefa);
  //substituir
    this.tarefas[itemIndex] = item;
  }

  //Criando uma função que retorne todo o conteudo
  //da lista de tarefas que está em memória
  getTarefas():Tarefa[]{
    // retornando todas as tarefas de lista
    return this.tarefas;
  }

  getTarefaById(idTarefa : number): Tarefa{
    //procurar na lista a tarefa através do ID
    const itemIndex = this.tarefas.findIndex(t => t.idTarefa === idTarefa);
    return this.tarefas[itemIndex];
  }
//criando uma função para incrementar o ID da tarefa
//ou seja, gerar um novo ID para o cadastro de uma tarefa
getNextId(): number{
  let maior = 0;
  this.tarefas.forEach(
    function (item){
      if (maior === 0) {
        maior = item.idTarefa;
      }
      if(maior < item.idTarefa){
        maior = item.idTarefa;
      }
    }
  );
  return maior + 1;
}



}
