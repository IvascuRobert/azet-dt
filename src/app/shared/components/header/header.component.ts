import { Component } from '@angular/core';
import { OffcanvasService } from '../../service/offcanvas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private offcanvasService: OffcanvasService) { }

  toggleMenu(): void {
    this.offcanvasService.toggleOffcanvasNavigation();
  }
}
