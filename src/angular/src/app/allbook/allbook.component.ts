import { Component, OnInit } from '@angular/core';
import { IBookInformation, BookService } from '../book.service'
import { MatTableDataSource } from '@angular/material/table'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent implements OnInit {

  books: IBookInformation[];
  searchValue:string;
  constructor(private dataService: BookService,private httpClient:HttpClient) {
  }
  datasource = new MatTableDataSource(this.dataService.book);

 
  ngOnInit(): void {
    this.getMovies();
    this.httpClient.get('../book.service.ts').subscribe((result:IBookInformation[]) =>
    this.books=result)
  }
  getMovies(): void {
    this.books = this.dataService.book;
  }

}
