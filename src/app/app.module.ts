import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';

const routes: Routes = [
  {path: 'painel-principal',component: PainelPrincipalComponent},
  {path: 'cadastro-tarefas',component: CadastroTarefasComponent},
  {path: 'consulta-tarefas',component: ConsultaTarefasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PainelPrincipalComponent,
    CadastroTarefasComponent,
    ConsultaTarefasComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(routes),
   //registrando os módulos de formulário
   ReactiveFormsModule,
   FormsModule,
   NgxPaginationModule,
   Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
