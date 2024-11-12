import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [MatIcon,NgClass,NgIf],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.css'
})
export class MaincontentComponent {



  isPopupVisible = false; 
  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
    console.log(this.isPopupVisible)
  }

}
