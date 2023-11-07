import { Pipe, PipeTransform } from '@angular/core';
import {} from './allbook/allbook.component'  
import { BookService, IBookInformation } from './book.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(book:IBookInformation[], searchValue:string): IBookInformation[] {

    if(!book||!searchValue)
    {
      return book;
    }
    return book.filter(book=>book.name.toLocaleLowerCase().includes(searchValue));
  }

}
