import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() callParent = new EventEmitter();
  @Input() isAvailable!: boolean;
  bgAnimation!: any;
  numberOfColorBoxes = 400;

  ngOnInit(): void {
    this.bgAnimation = document.getElementById('bgAnimation');

    for (let i = 0; i < this.numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      this.bgAnimation.appendChild(colorBox);
    }
  }

  onClick(){
    console.log("clicou");

  }
}
