import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Input() onChangeHeader: boolean = false;

  onToggleMenu(): void {
    const menu = document.querySelector('#offcanvasDarkNavbar');

    menu?.classList.remove('show');
    menu?.removeAttribute('aria-modal');
    menu?.removeAttribute('role');

    let fadeMenu: HTMLElement = document.querySelector('.offcanvas-backdrop') as HTMLElement;
    if (fadeMenu) {
      fadeMenu.classList.remove('show');
      fadeMenu.click();
    }
  }
}
