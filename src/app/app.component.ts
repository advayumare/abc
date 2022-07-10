import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abc';

  disableBtn = true;

  arr = {"advay": "umare"};

  getClick(str: string) {
    console.log("Child componet: User clicked: ", str);
  }

  checkValue() {
    console.log(this.disableBtn)
  }

  onSave() {
    this.title = "AAA";
    alert()
    // this.myAppChange.emit(this.myApp)
  }
}
