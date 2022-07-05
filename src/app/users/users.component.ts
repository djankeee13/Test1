import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user!: { id: string; name: string; };
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name']
      }
    })

    this.route.queryParams.subscribe((data) => {
      console.log(data)
    })
    this.route.fragment.subscribe((data) => {
      console.log(data)
    })
  }
  onCategoriesClick(){
   /*  this.router.navigateByUrl('/categories'); */
    this.router.navigate(['/categories']);
  }
  getRamaDetails(){
    this.router.navigate(['/users', 2 , 'Rama'],
     {queryParams : {page: 1, search: 'Leela'},
    fragment: 'loading'}
    )
  }
}
