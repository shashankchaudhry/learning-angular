import { Component } from '@angular/core';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibility = true;
  clicks = [];
  clickCount = 1;

  reverseVisibility() {
    this.visibility = !this.visibility;
    this.clicks.push(this.clickCount);
    this.clickCount++;
  }

  isFifthLog(count) {
    return count >= 5;
  }

  getBackground(count) {
    if (this.isFifthLog(count)) {
      return 'blue';
    }
    return 'white';
  }
}
