import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { ClientesComponent } from '../../layout/clientes/clientes.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [

    NavbarComponent,
    SliderComponent,
    ClientesComponent,
    FooterComponent

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
