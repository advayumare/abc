import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Input()
  myApp: string = "ABC";

  @Output()
  myAppChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  sendClick: EventEmitter<string> = new EventEmitter<string>();

  public myLink: string = 'https://clodura.ai';

  constructor() {
  }


  ngOnInit(): void {
    console.log("called init");
  }

  ngAfterViewInit(): void {
    console.log("called AfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("Called Destroyed")
  }

  sendClickFn(str: string) {
    this.sendClick.emit(str);
  }

  getDate() {
    return new Date();
  }
}
