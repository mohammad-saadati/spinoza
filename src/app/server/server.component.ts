import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  disableBtn = true;
  announcement = 'not clicked';
  name = 'server name';
  isRenderd = false;

  constructor() {
    setTimeout(() => {
      this.disableBtn = false;
    }, 2000);
  }

  onClickButton() {
    this.announcement = 'clicked';
  }
  onUpdateservername(e: any) {
    this.name = (<HTMLInputElement>e.target).value;
  }
  showParagraph() {
    this.isRenderd = !this.isRenderd;
  }
  getColor() {
    return this.isRenderd ? 'green' : 'blue';
  }
}
