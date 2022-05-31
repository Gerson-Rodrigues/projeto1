import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefasService } from '../services/tarefas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-tarefas',
  templateUrl: './consulta-tarefas.component.html',
  styleUrls: ['./consulta-tarefas.component.css'],
})
export class ConsultaTarefasComponent implements OnInit {

  message="";
  //atributo parra armazenar o filtro da busca

  filtro = '';

  //atribuir para armazenar o numero da página que o usuário
  //estiver navegando na paginação
  page = 1;

  constructor(private tarefasService: TarefasService) {}
  //variavel para capturar todas as
  //tarefas obtidas pelo service que estão gravadas e memória
  dados: Tarefa[] = [];

  //variavel para capturar os dados
  //de 1 tarefa selecionada para exclusão ou edição
  item: Tarefa = {
    idTarefa: -1,
    nome: '',
    data: '',
    hora: '',
    descricao: '',
    prioridade: ''
  };

  //função executa antes do componente abrir na página
  ngOnInit(): void {
    // trazer todas as tarefas que estão gravadas em memória
    this.dados = this.tarefasService.getTarefas();
  }

  //formulario de edição de tarefa
  formEdicaoTarefa = new FormGroup({
    idTarefa: new FormControl('', []),
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150),]),
    data: new FormControl('', [
      Validators.required,]),
    hora: new FormControl('', [
      Validators.required,]),
    descricao: new FormControl('', [
      Validators.required,
      Validators.maxLength(300),]),
    prioridade: new FormControl('', [
      Validators.required,]),
  });

  get form(): any {
    return this.formEdicaoTarefa.controls;
  }
 //função para obter os dados da tarefa selecionada
obterTarefa(idTarefa: number, opcao?:string): void{
  //buscar os dados da tarefa através di ID
  this.item = this.tarefasService.getTarefaById(idTarefa);
  //se a opção for editar iremos preencher o fomulario. . . .
  if(opcao === 'EDITAR'){
    //preencher os campos do formulario
    this.form.idTarefa.setValue(this.item.idTarefa);
    this.form.nome.setValue(this.item.nome);
    this.form.data.setValue(this.item.data);
    this.form.hora.setValue(this.item.hora);
    this.form.descricao.setValue(this.item.descricao);
    this.form.prioridade.setValue(this.item.prioridade);
    this.message="";
    }
   }
   //função para confirmar a atualização dos dados da tarefa
    confirmaAtualizacao(): void {
      //atualizarr a tarefa com os dadso preenchidos do formulario
      this.tarefasService.update(this.formEdicaoTarefa.value);
      //recarregar a consulta
      this.ngOnInit;
      this.message = "Tarefa Atualizada com sucesso";
    }



  //função para excluir uma tarefa
  confirmaExclusao(): void{
  //excluindo a tarefa selecionada
  this.tarefasService.delete(this.item);
  //executar novamente a consulta
  this.ngOnInit();
}

  //função para realizar a paginação
  handlePageChange(event: any): void {
    this.page = event;
  }
}


