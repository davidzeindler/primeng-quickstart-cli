import {TestBed} from '@angular/core/testing';

import {TerminalCommandService} from './terminal-command.service';

describe('TerminalService', () => {
  let service: TerminalCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
