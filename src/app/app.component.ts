import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  isAvailable: boolean = false;
  whiteBallActive: boolean = false;
  location!: Location;
  onChangeHeader: boolean = false;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnChanges() {
    console.log(this.location.path());
  }

  ngOnInit(): void {
    this.onCallParent();



    this.location.onUrlChange( (url: string, state: unknown) => {
      console.log(url);
      if (url != '/home') {
        this.onChangeHeader = true;
        console.log(this.onChangeHeader);
      }

      if (url == '/home') {
        this.onChangeHeader = false;
        console.log(this.onChangeHeader);
      }
    })
  }

  onCallParent(click?: any) {
    this.whiteBallActive = true;
    setTimeout(() => {
      this.whiteBallActive = false;
      this.isAvailable = true;
    }, 5000);
  }
}
