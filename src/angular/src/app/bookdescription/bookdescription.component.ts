import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'bookdescription',
  templateUrl: './bookdescription.component.html',
  styleUrls: ['./bookdescription.component.css']
})
export class BookdescriptionComponent implements OnInit {

  books;
  constructor(private dataService: BookService, private route: ActivatedRoute) {


  }
  ngOnInit(): void {
    {

      let id = +this.route.snapshot.paramMap.get('id')
      this.books = this.dataService.book.find(i => i.id === id)
      /**
      this.route.paramMap.subscribe((params: ParamMap) => this.id=params.get('id'));
      console.log(this.id); 
      this.books=this.dataService.book.find((b)=>{
      console.log(b.id)
      b.id===this.id  
    }) */
    }
  }
  bookRemove() 
  {
    if (confirm('Silmek istediğinize emin misiniz ?') == true) 
    {
      for (let i = 0; i < this.dataService.book.length; i++) 
      {
        if (this.books == this.dataService.book[i])
        {
          this.dataService.book.splice(i,1);
        }
      }
     // this.dataService.book.splice(1, 1);
    }
    console.log(this.books)
  }
}
