import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SliderComponent } from '../../layout/slider/slider.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [

    NavbarComponent,
    SliderComponent

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
