import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number = 4;
  starWidth: number;
  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 85 / 5;
  }

}
