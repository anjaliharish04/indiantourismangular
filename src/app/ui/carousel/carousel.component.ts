import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-carousel',
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] = [];

  ngOnInit(): void {
    this.images = [
      'https://t4.ftcdn.net/jpg/05/05/51/25/360_F_505512599_D6ulJI9hV6aGTP04FPC2XDk5QHGOQtpW.jpg',
      'https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww',
    ];
  }
}
