import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

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
   NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }