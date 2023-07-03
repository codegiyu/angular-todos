import { Component } from '@angular/core';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor (
    private state: GlobalStateService,
    private _router: Router
  ) {}

  handleCloseMenu() {
    this.state.setMenuIsOpen(false)
  }

  addTaskHandler() {
    this._router.navigateByUrl("add-task");
  }
}
