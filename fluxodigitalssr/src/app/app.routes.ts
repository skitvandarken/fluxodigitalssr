import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { EmpregosComponent } from './paginas/empregos/empregos.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ClientesComponent } from './layout/clientes/clientes.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { WhatsappComponent } from './layout/whatsapp/whatsapp.component';

export const routes: Routes = [
// componentes de estrututra
    { path:'', component:InicioComponent},
    { path:'acerca', component:AcercaComponent},
    { path:'contacto', component:ContactoComponent},
    { path:'empregos', component:EmpregosComponent},
    { path:'portfolio', component:ServicosComponent},
    { path:'servicos', component: ServicosComponent},
//componenes de layout
    { path:'clientes', component: ClientesComponent},
    { path: 'footer', component: FooterComponent},
    { path:'formulario', component:InicioComponent},
    { path:'navbar',component:NavbarComponent },
    { path:'slider', component: SliderComponent},
    { path: 'whatsapp', component: WhatsappComponent}

];
