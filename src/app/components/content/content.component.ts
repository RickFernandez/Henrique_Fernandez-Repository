import { Component, OnInit, OnChanges } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges {
  location!: Location;
  onChangeHeader: boolean = false;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnChanges() {
    console.log(this.location.path());
  }

  ngOnInit(): void {
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
}
