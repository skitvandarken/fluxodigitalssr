import { Component } from '@angular/core';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    WhatsappComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
