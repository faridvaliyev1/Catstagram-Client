import { Component, OnInit } from '@angular/core';
import { ICat } from '../models/cats';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent implements OnInit {
  cats: Array<ICat>
  constructor(private catService: CatService) { }

  ngOnInit() {
     this.catService.getCats().subscribe(cats=>{
     this.cats=cats;
     console.log(this.cats)
    })
  }

}
