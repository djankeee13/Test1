import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  teams!: any;
  name: string = "djani";
  constructor(private api: ApiService) { }
  
  ngOnInit(): void {
    this.renderData();
  }
  renderData(){
    this.api.getTeams()
    .subscribe( res => {
      this.teams = res.data;
      console.log(this.teams)
    })
  }
 

}
