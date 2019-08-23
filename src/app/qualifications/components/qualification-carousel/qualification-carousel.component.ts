import { Component, OnInit, Input } from '@angular/core';
import { Qualification } from '../../qualification';

@Component({
  selector: 'app-qualification-carousel',
  templateUrl: './qualification-carousel.component.html',
  styleUrls: ['./qualification-carousel.component.scss']
})
export class QualificationCarouselComponent {
  @Input() qualifications: Qualification[];
  @Input() error: string;

  slideConfig = {
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1500,
  };
}
