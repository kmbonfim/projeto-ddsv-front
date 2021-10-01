import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes internos
import { AppComponent } from "./app.component";
import { CadastrarUsuarioComponent } from "./components/views/usuario/cadastrar-usuario/cadastrar-usuario.component";
import { ListarUsuarioComponent } from "./components/views/usuario/listar-usuario/listar-usuario.component";

@NgModule({
    declarations: [
        AppComponent,
        CadastrarUsuarioComponent,
        ListarUsuarioComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
