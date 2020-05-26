import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/auth/login/login/login.component';
import { RegisterComponent } from './_components/auth/register/register/register.component';
import { AgregarMascotaComponent } from './_components/mascotas/agregar-mascota/agregar-mascota.component';
import { EditarMascotasComponent } from './_components/mascotas/editar-mascotas/editar-mascotas.component';
import { ListarMascotasComponent } from './_components/mascotas/listar-mascotas/listar-mascotas.component';
import { AuthGuard } from './_guards/auth.guard';




const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path: "mascotas", component: ListarMascotasComponent, canActivate: [AuthGuard] },
  { path: "mascotas/agregar", component: AgregarMascotaComponent, canActivate: [AuthGuard] },
  { path: "mascotas/editar/:id", component: EditarMascotasComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/mascotas", pathMatch: "full" },// Cuando es la raíz
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
