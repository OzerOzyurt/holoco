import { Component } from '@angular/core';
import { MaincontentComponent } from '../maincontent/maincontent.component';
import { NavbarBottomComponent } from '../navbar-bottom/navbar-bottom.component';
import { SliderowlComponent } from '../sliderowl/sliderowl.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaincontentComponent,NavbarBottomComponent,SliderowlComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
