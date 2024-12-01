import { NgFor, NgIf } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { SlidesOutputData, OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sliderowl',
  standalone: true,
  imports: [CarouselModule,MatIconModule,NgIf,NgFor],
  templateUrl: './sliderowl.component.html',
  styleUrl: './sliderowl.component.css'
})
export class SliderowlComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }


  robusto: [
    { img: "assets/kahve.jpg", title: 'Robusto Item 1', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 2', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 3', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 4', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 5', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 6', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 7', description: 'Sepete Ekle' },
    { img: "assets/kahve.jpg", title: 'Robusto Item 8', description: 'Sepete Ekle' },
  ]

  carouselData: WritableSignal<CarouselData[]> = signal([
    { id: 'slide-1', baslik:'Baslık', text: 'Açıklama', img: "assets/slider/mirela1000.webp",subtext: 'Mirela ', price:'1000g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false },
    { id: 'slide-2',baslik:'Baslık', text: 'Açıklama', img: "assets/slider/private1kg.jpg",subtext: 'Private ', price:'1000g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false  },
    { id: 'slide-3',baslik:'Baslık', text: 'Açıklama', img: "assets/slider/public1kg.jpg",subtext: 'Public ', price:'1000g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false  },
    { id: 'slide-4', baslik:'Tangle Espresso', text: 'Endonezya ve Brezilya’dan Sertifikalı %70 Arabica & %30 Robusta Kahve Harmanı', img: "assets/slider/tangle1kg.jpg",subtext: 'Tangle ', price:'1000g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'Bu kahve, kahve dünyasının kalbi olan Endonezya ve Brezilya’dan özenle seçilen sertifikalı çekirdeklerle hazırlanmıştır. %70 Arabica ve %30 Robusta oranındaki harmanı sayesinde yumuşak içimi güçlü bir gövdeyle buluşturan eşsiz bir deneyim sunar.', status: false  },
    { id: 'slide-5', baslik:'Terra Espresso', text: 'Endonezya, Etiyopya ve Brezilya’dan Sertifikalı %100 Arabica Kahve',  img: "assets/slider/terra1kg.jpg",subtext: 'Terra', price:'1000g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'Bu özel kahve, dünyanın en iyi kahve yetiştirme bölgelerinden olan Endonezya, Etiyopya ve Brezilya’dan özenle seçilmiş, %100 Arabica sertifikalı çekirdeklerden üretilmiştir. Her yudumda, kahveye adanmış bu üç ülkenin eşsiz tat profillerini deneyimleyin.', status: false  },
    { id: 'slide-6',baslik:'Baslık', text: 'Açıklama', img: "assets/slider/mirela500.webp",subtext: 'Mirela', price:'500g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false  },
    { id: 'slide-7',baslik:'Baslık', text: 'Açıklama', img: "assets/slider/private500gr.jpg",subtext: 'Private', price:'500g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false  },
    { id: 'slide-8',baslik:'Baslık', text: 'Açıklama', img: "assets/slider/public500gr.jpg",subtext: 'Public', price:'500g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false  },
    { id: 'slide-9',baslik:'Tangle Espresso', text: 'Endonezya ve Brezilya’dan Sertifikalı %70 Arabica & %30 Robusta Kahve Harmanı', img: "assets/slider/tangle500gr.jpg",subtext: 'Tangle', price:'500g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'Bu kahve, kahve dünyasının kalbi olan Endonezya ve Brezilya’dan özenle seçilen sertifikalı çekirdeklerle hazırlanmıştır. %70 Arabica ve %30 Robusta oranındaki harmanı sayesinde yumuşak içimi güçlü bir gövdeyle buluşturan eşsiz bir deneyim sunar.', status: false  },
    { id: 'slide-10',baslik:'Terra Espresso', text: 'Endonezya, Etiyopya ve Brezilya’dan Sertifikalı %100 Arabica Kahve', img: "assets/slider/terra500gr.jpg",subtext: 'Terra', price:'500g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'Bu özel kahve, dünyanın en iyi kahve yetiştirme bölgelerinden olan Endonezya, Etiyopya ve Brezilya’dan özenle seçilmiş, %100 Arabica sertifikalı çekirdeklerden üretilmiştir. Her yudumda, kahveye adanmış bu üç ülkenin eşsiz tat profillerini deneyimleyin.', status: false  },
    { id: 'slide-11', baslik:'Baslık', text: 'Açıklama', img: "assets/slider/mirela250.webp",subtext: 'Mirela ', price:'250g', dataMerge: 2, width: 210, dotContent: 'text1',   description: 'metin', status: false },

    // { id: 'slide-7', text: 'Slide 7', dotContent: 'text5'},
    // { id: 'slide-8', text: 'Slide 8', dotContent: 'text5'},
    // { id: 'slide-9', text: 'Slide 9', dotContent: 'text5'},
    // { id: 'slide-10', text: 'Slide 10', dotContent: 'text5'},
  ]);
  selectedItem: any = null;
  
  togglePopup(item: any) {
    item.status = !item.status; this.selectedItem = item.status ? item : null; }
    closePopup() { if (this.selectedItem) { this.selectedItem.status = false; this.selectedItem = null; } }

  currentUrl: WritableSignal<string> = signal('');
  fragment: WritableSignal<string | null> = signal('');

  activeSlides: WritableSignal<SlidesOutputData | null> = signal(null);

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  // ngOnInit() {
  //   // console.log(this.route.pathFromRoot);
  //   this.route.fragment.pipe(
  //     tap(fragment => this.fragment.set(fragment)),
  //     // tap(() => console.log('this.fragment', this.fragment()))
  //   ).subscribe(
  //     () => { }
  //   );

  //   this.route.url.pipe(
  //     tap(url => this.currentUrl.set(url[0].path)),
  //     // tap(() => console.log('this.currentUrl', this.currentUrl()))
  //   ).subscribe(
  //     () => { }
  //   )

  // }

  moveToSS() {
    this.router.navigate(['/' + this.currentUrl()], { fragment: 'second-section' });
  }

  getPassedData(data: any) {
    this.activeSlides.set(data);
    console.log('HomeComponent');
    console.log(this.activeSlides());
  }

  getChangeData(data: any) {
    this.activeSlides.set(data);
    console.log('HomeComponent -> change');
    console.log(data);
  }

  getChangedData(data: any) {
    this.activeSlides.set(data);
    console.log('HomeComponent -> changed');
    console.log(data);
  }
  removeLastSlide() {
    this.carouselData.update((data) => {
      const res = [...data]
      res.splice(-1, 1)
      return res
    });
  }

  carouselChanged(evt: SlidesOutputData) {
    console.log(evt);
  }
  
}


interface CarouselData {
  id: any;
  text: string;
  img:string;
  subtext:string;
  price:string;
  description:string;
  dataMerge?: number;
  width: number;
  dotContent?: string;
  src?: string;
  dataHash?: string;
  status?:any;
}

