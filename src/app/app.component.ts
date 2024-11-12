import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MaincontentComponent } from '../components/maincontent/maincontent.component';
import { SliderComponent } from '../components/slider/slider.component';
import { NavbarBottomComponent } from '../components/navbar-bottom/navbar-bottom.component';
import { SliderowlComponent } from '../components/sliderowl/sliderowl.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,MaincontentComponent,SliderComponent,NavbarBottomComponent,SliderowlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holoco';
}
