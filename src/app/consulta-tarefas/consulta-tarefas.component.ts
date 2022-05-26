import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css']
})
export class ConsultaTarefasComponent implements OnInit {
  //atribuir para armazenar o numero da página que o usuário
  //estiver navegando na paginação
  page = 1;


  constructor(private tarefasService: TarefasService) { }
  //variavel para capturar todas as 
  //tarefas obtidas pelo service que estão gravadas e memória
  dados: Tarefa[]=[];
  
  //função executa antes do componente abrir na página
  ngOnInit(): void {
    // trazer todas as tarefas que estão gravadas em memória
    this.dados = this.tarefasService.getTarefas();  
  }

  //função para realizar a paginação
  handlePageChange(event: any):void{
    this.page = event;
  }

}
