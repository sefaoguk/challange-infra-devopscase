import { Component, Inject, OnInit } from '@angular/core';
import {AddbookComponent} from '../addbook/addbook.component'
import { BookService, IBookInformation } from '../book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'pizza-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  books: IBookInformation;

  constructor(private bookService:BookService, private dialogs:MatDialog,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {


  }

  btnYes()
  {
    
    this.bookService.book.push(this.data);
    this.dialogs.closeAll();
  }

  btnNo()
  {
    this.dialogs.closeAll();
  }
}
