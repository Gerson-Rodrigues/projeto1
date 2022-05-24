import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

//importar as classes para configurar a biblioteca de rotas do ANgular
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  //para cada componente, iremos definir um PATH (caminho da url)
  {path:'painel-principal', component: PainelPrincipalComponent},
  {path:'cadastro-tarefas', component: CadastroTarefasComponent},
  {path:'consulta-tareas', component: ConsultaTarefasComponent}
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
    //AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
