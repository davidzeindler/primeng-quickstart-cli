import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerminalCommandService {
  greetings = ['Hello!', 'Welcome!', 'Greetings!'];

  constructor() {
  }

  getGreeting(id: number) {
    return this.greetings[id];
  }

  getResponse(command: string) {
    let response
    if (command === 'date') {
      return new Date().toDateString()
    }
    if (command === 'greet') {
      return this.getGreet();

    } else if (command === 'random') {

      return 'Random answer!'
    } else {
      return 'Unknown command: ' + command;
    }
  }

  getGreet() {
    let id = Math.floor(Math.random() * (this.greetings.length));
    return this.getGreeting(id);
  }

}
