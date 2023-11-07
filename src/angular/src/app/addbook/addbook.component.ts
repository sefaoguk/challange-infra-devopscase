import { Component, OnInit } from '@angular/core';
import { BookService, IBookInformation } from '../book.service';
import { IUserInformation, UserService } from '../user-service.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  exform: FormGroup;
  userInformation: IUserInformation[];
  books: IBookInformation;

  constructor(private dataService: UserService, private bookService: BookService, private dialog: MatDialog) {
    this.userInformation = dataService.userInformation;
  }
  ngOnInit() {


    this.exform = new FormGroup({
      img: new FormControl(null, [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      printingDate: new FormControl(null, [Validators.required]),
      publisherHouse: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      oldprice: new FormControl(null, [Validators.required]),
      newprice: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  openDialog() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data=this.exform.getRawValue();
    this.dialog.open(DialogComponent, dialogConfig);
 
  }
  
 getVal() {
   
   console.log(this.exform.get('img'));
   this.books = this.exform.getRawValue();
   this.bookService.book.push(this.books);
   console.log(this.bookService.book)
   //this.exform.reset();
   
 }  


}
