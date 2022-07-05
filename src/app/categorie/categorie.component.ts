import { Component, OnInit } from '@angular/core';
import { Route, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categorie!: { id: string; name: string; };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categorie = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }

}
