import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarUsuarioComponent } from "./components/views/usuario/cadastrar-usuario/cadastrar-usuario.component";
import { ListarUsuarioComponent } from "./components/views/usuario/listar-usuario/listar-usuario.component";
import { BuscarUsuarioComponent } from './components/views/usuario/buscar-usuario/buscar-usuario.component';

const routes: Routes = [
    {
        path: "",
        component: ListarUsuarioComponent,
    },
    {
        path: "usuario/listar",
        component: ListarUsuarioComponent,
    },
    {
        path: "usuario/cadastrar",
        component: CadastrarUsuarioComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
