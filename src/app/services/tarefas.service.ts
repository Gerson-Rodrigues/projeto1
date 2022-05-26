import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  //guardar uma lista de tarefas sem memória
  tarefas : Tarefa[]=[
    {
      nome:'Aula de Java WebDeveloper',
      data:'2022-05-10',
      hora:'18:00',
      descricao:'Aula de Programação orientada a objetos',
      prioridade:'1'    
    },{
      nome:'Aula de Java Hibernate',
      data:'2022-05-10',
      hora:'15:00',
      descricao:'Prática de controle de emoções',
      prioridade:'2'    
    },{
      nome:'Aula de Angular',
      data:'2022-05-25',
      hora:'10:00',
      descricao:'Parte de FrontEnd',
      prioridade:'1'    
    },{
      nome:'Aula de Java',
      data:'2022-04-11',
      hora:'09:00',
      descricao:'Só pra encher linguiça',
      prioridade:'3'    
    },{
      nome:'Aula de TypeScript',
      data:'2022-05-11',
      hora:'08:00',
      descricao:'Só alegria',
      prioridade:'2'    
    }, {
      nome:'Aula de Comandos DOS',
      data:'2001-01-01',
      hora:'01:00',
      descricao:'Comandos em Ação',
      prioridade:'1'    
    },{
      nome:'Aula de Inglês Técnico',
      data:'2020-08-10',
      hora:'05:00',
      descricao:'Analisando idiomas',
      prioridade:'2'    
    },{
      nome:'Aula de Protótipos',
      data:'2012-05-02',
      hora:'10:00',
      descricao:'Partes Móveis',
      prioridade:'3'    
    },{
      nome:'Aula de HTML5',
      data:'2022-02-11',
      hora:'09:00',
      descricao:'Documentação Completa',
      prioridade:'1'    
    },{
      nome:'Aula de Python',
      data:'2022-03-01',
      hora:'19:00',
      descricao:'Top Demais',
      prioridade:'3'    
    },
  ];  //inicializando com um array (lista)
  constructor() { }

  //criando uma função para capturar um tarefa vinda da página 
  //de cadastro e adiciona-la na lista que está em memória.
  addTarefa(item : Tarefa){
    //adicionar na lista
    this.tarefas.push(item);
  }

  //cria o método para a tela de consultaTarefa
  //criar uma função que retorne todo o conteudo 
  // da lista de tarefas que está em memória
  getTarefas():Tarefa[]{
    return this.tarefas;
  }

}
