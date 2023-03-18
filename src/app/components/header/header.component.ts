import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() callParent = new EventEmitter();
  @Input() onChangeHeader: boolean = false;

  ngOnInit(): void {
    this.onClick();
  }

  onClick(link?: any){
    this.callParent.emit(null);
    if (link.innerText != 'Home') {
      link.classList.add('selected');
    }
  }
}
