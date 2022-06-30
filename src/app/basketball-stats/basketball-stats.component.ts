import { Component, OnInit } from '@angular/core';
import { ApibasketballService } from '../services/apibasketball.service';

@Component({
  selector: 'app-basketball-stats',
  templateUrl: './basketball-stats.component.html',
  styleUrls: ['./basketball-stats.component.scss']
})
export class BasketballStatsComponent implements OnInit {
 data! : any;
 meta! : any;
 public point =Math.floor(Math.random()* (8-2));
  constructor(private api : ApibasketballService) { }

  ngOnInit(): void {
    this.renderData();
  }

  renderData(){
    this.api.getStats()
    .subscribe(res => {
      this.data = res.data;
      this.meta = res.meta;
      console.log(this.data, this.meta)
    })
  }
  getRandom(point: number){
    return this.point * (point);
    
  }
}
