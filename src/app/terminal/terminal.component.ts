import {Component, OnDestroy} from '@angular/core';
import {Terminal, TerminalService} from 'primeng/terminal';
import {Subscription} from 'rxjs';
import {TerminalCommandService} from '../service/terminal-command.service';

@Component({
  selector: 'app-terminal',
  standalone: true,
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  imports: [
    Terminal
  ],
  providers: [
    TerminalService
  ]

})
export class TerminalComponent implements OnDestroy {
  subscription: Subscription;


  constructor(private terminalService: TerminalService, private terminalCommandService: TerminalCommandService) {
    this.subscription = this.terminalService.commandHandler.subscribe((command: string) => {
      this.terminalService.sendResponse(terminalCommandService.getResponse(command));
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
