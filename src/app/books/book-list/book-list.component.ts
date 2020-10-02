import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {IBooks} from '../ibooks';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBooks[] = [];

  constructor(
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData() {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data
    }, error => console.log(error));
  }

  detailsBook(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteBook(id: number) {
    this.router.navigate(['delete', id]);
  }

  editBook(id: number) {
    this.router.navigate(['edit', id]);
  }

}
