import {  NgClass, NgFor, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild,  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor,NgIf,MatIconModule,TitleCasePipe,NgStyle,NgClass,NgIf],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  // @ViewChild('popupElement',{static:true }) popupElement: ElementRef;
  // @ViewChild('popupElement', { static: false }) popupElement!: ElementRef;
  
   coffeeSlides: { [key: string]: CoffeeItem[] } = {
    robusto: [
      { img: "assets/kahve.jpg", title: 'Robusto Item 1', description: 'Sepete Ekle' },
      { img: "assets/kahve1.jpg", title: 'Robusto Item 2', description: 'Sepete Ekle' },
      { img: "assets/kahve2.jpg", title: 'Robusto Item 3', description: 'Sepete Ekle' },
      { img: "assets/kahve3.jpg", title: 'Robusto Item 4', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Robusto Item 5', description: 'Sepete Ekle' },
      { img: "assets/kahve1.jpg", title: 'Robusto Item 6', description: 'Sepete Ekle' },
      { img: "assets/kahve2.jpg", title: 'Robusto Item 7', description: 'Sepete Ekle' },
      { img: "assets/kahve3.jpg", title: 'Robusto Item 8', description: 'Sepete Ekle' },
    ],
    arabica: [
      { img: "assets/kahve.jpg", title: 'Arabica Item 1', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 2', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 3', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 4', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 5', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 6', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 7', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Arabica Item 8', description: 'Sepete Ekle' },
    ],
    turko: [
      { img: "assets/kahve.jpg", title: 'Turko Item 1', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 2', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 3', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 4', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 5', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 6', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 7', description: 'Sepete Ekle' },
      { img: "assets/kahve.jpg", title: 'Turko Item 8', description: 'Sepete Ekle' },
    ],
  };

  isPopupVisible = false; 
  // togglePopup() {
  //   // Popup'ın görünürlük durumunu değiştirme
  //   const popup = this.popupElement.nativeElement;
  //   if (popup.style.display === 'block') {
  //     popup.style.display = 'none';
  //   } else {
  //     popup.style.display = 'block';
  //   }
  // }
//   togglePopup() {
//     const popup = this.popupElement.nativeElement; 
//     popup.style.display = this.isPopupVisible ? 'block' : 'none'; 
//     this.isPopupVisible = !this.isPopupVisible; 
//     console.log(this.isPopupVisible);
// }

  

  // @HostListener('document:click', ['$event']) 
  // closePopupOutside(event: Event) {
  //   if (this.togglePopup && !this.popupElement.nativeElement.contains(event.target)) {
  //     this.togglePopup();
  //   }
  // } 
  


  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
    console.log(this.isPopupVisible)
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const popupElement = document.querySelector('.popup-content');
    
    if (this.isPopupVisible && popupElement && !popupElement.contains(target)) {
      this.isPopupVisible = false;
    }
  }



  
  selectedType = 'robusto';

  switchType(type: string) {
    this.selectedType = type;
  }
  types = ['robusto', 'arabica', 'turko'];

  // prevSlide(){
  //   this.selectedType === 'robusto' ? this.switchType('arabica') : this.switchType('turko')
  // }
  // prevSlide() {
  //   if (this.selectedType === 'robusto') {
  //     this.switchType('arabica');
  //   } else if (this.selectedType === 'arabica') {
  //     this.switchType('turko');      
  //   } else {
  //     this.switchType('rabusto')
  //   }
  // }
  prevSlide() {    
    const currentIndex = this.types.indexOf(this.selectedType);
    const nextIndex = (currentIndex + 1) % this.types.length;
    this.switchType(this.types[nextIndex]);
    console.log(currentIndex,nextIndex,this.types.length)
    console.log(this.types)
  }

//   nextSlide() {
//     this.selectedType === 'turko' ? this.switchType('arabica') : this.switchType('robusto')
//  }
nextSlide() {  
  const currentIndex = this.types.indexOf(this.selectedType);
  const prevIndex = (currentIndex - 1 + this.types.length) % this.types.length;
  this.switchType(this.types[prevIndex]); 
  
}


}
// currentSlide = 0;
//   slideKeys = Object.keys(this.coffeeSlides);
//   currentCategory = this.slideKeys[0];

//   prevSlide() {
//     this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.coffeeSlides[this.currentCategory].length - 1;
//   }

//   nextSlide() {
//     this.currentSlide = (this.currentSlide < this.coffeeSlides[this.currentCategory].length - 1) ? this.currentSlide + 1 : 0;
//   }

interface CoffeeItem {
  img: string;
  title: string;
  description: string;
}




