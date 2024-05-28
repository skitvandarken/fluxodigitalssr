import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { InicioComponent } from '../../paginas/inicio/inicio.component';
import { ServicosComponent } from '../../paginas/servicos/servicos.component';
import { AcercaComponent } from '../../paginas/acerca/acerca.component';
import { EmpregosComponent } from '../../paginas/empregos/empregos.component';
import { ContactoComponent } from '../../paginas/contacto/contacto.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [

    RouterModule,
    InicioComponent,
    ServicosComponent,
    AcercaComponent,
    EmpregosComponent,
    ContactoComponent
    


  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
