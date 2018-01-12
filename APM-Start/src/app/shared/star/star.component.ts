import { Component, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = 
          new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 85 / 5;
  }

  onClick(): void {
    this.notify.emit(`${this.rating}`);
  }

}
