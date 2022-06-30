import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-child',
  templateUrl: './main-child.component.html',
  styleUrls: ['./main-child.component.scss']
})
export class MainChildComponent implements OnInit {
  @Input() bindName!: any;
  @Input() abb!: any;
  @Input() city! : any;
  @Input() conference! : any;
  @Input() division : any;
  constructor() { }

  ngOnInit(): void {
  }

}
