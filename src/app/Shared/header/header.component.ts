import {Component, Input} from '@angular/core';
import {SideBarService} from "../../Services/side-bar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() curUser!:any;

  constructor(private sidebarService: SideBarService) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
