import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from "../../ui/carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }




  cimages = [{
    id: 1,
    alt: '',
    src: 'https://mediaindia.eu/wp-content/uploads/2017/09/India_tourism.jpg'
  }, {
    id: 2,
    alt: '',
    src: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-gurdwara-sri-tarn-taran-sahib-or-gurdwara-sri-darbar-sahib-amritsar-punjab-city-hero?qlt=82&ts=1726761927494'
  }, {
    id: 3,
    alt: '',
    src: 'https://www.traveltrendstoday.in/wp-content/uploads/2024/12/India-now-39th-among-119-countries-in-the-Travel-jpg.jpg'
  }

  ]
}