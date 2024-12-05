import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {Sidebar} from "primeng/sidebar";

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [
    Button,
    Sidebar
  ],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.scss'
})
export class SidebarLeftComponent {
  sidebarMenuLeftVisible: boolean = true
}
