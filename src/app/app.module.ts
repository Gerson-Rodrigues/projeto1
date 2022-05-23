import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaTarefasComponent } from './consulta-tarefas/consulta-tarefas.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
