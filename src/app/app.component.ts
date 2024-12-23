import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {CommonModule} from '@angular/common';
import {TerminalComponent} from './terminal/terminal.component';
import {SidebarLeftComponent} from './sidebar-left/sidebar-left.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, TerminalComponent, SidebarLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = '';

  msg = '';
  gfg: boolean = true;

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }
}
