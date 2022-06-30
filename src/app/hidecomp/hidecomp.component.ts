import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidecomp',
  templateUrl: './hidecomp.component.html',
  styleUrls: ['./hidecomp.component.scss']
})
export class HidecompComponent implements OnInit {
  @Input() toggle!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
