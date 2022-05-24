import { visitAll } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit {

  //método Construtor--> incializar os serviços di componente 
  constructor() { }
//função executa antes do componente abrir na página
  ngOnInit(): void {
  }

formCadastroTarefa = new FormGroup({
  //Capaturando cada campo do formulário 
  //nome da tarefa (campo do fomulário)
  nome: new FormControl('',[
    Validators.required, //campo Obrigatório
    Validators.minLength(6),
    Validators.maxLength(150),
    
  ]),
  data: new FormControl('',[]),
  hora: new FormControl('',[]),
  descricao: new FormControl('',[]),
  prioridade: new FormControl('',[]),
});
//Criando um objeto para que seja possivel utilizar 
//o FormControl (formCadastroTarefa) na página HTML

get form(): any{
  //permitir que possamos acessar o conteudo
  //do objeto 'formCadastroTarefa' na página HTML
  return this.formCadastroTarefa.controls;
}

//função para capturar o evento SUBMIT do formulario
onSubmit(): void{
  //Imprimir o conteudo do formulario
  console.log(this.formCadastroTarefa.value);
}

}//fecha o cadastro-tarefas.component.ts
//angularforms
//FormGroup Utilizado pra manipular todo o formulário
//FormControl Utilizado para manipular cada campo do formulário
//Validators Utilizado para validar cada campo do formulário
