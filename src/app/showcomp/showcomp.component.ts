import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcomp',
  templateUrl: './showcomp.component.html',
  styleUrls: ['./showcomp.component.scss']
})
export class ShowcompComponent implements OnInit {
    toggle:boolean = true;
    public title! : string;
  constructor() { }

  ngOnInit(): void {
  }
  toggleComponent(){
    this.toggle =! this.toggle;
  }

}
