import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBooks} from '../ibooks';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  id: number;
  book: IBooks;
  message: string;
  deleted: boolean;

  constructor(
    private bookSevice: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.bookSevice.findBookById(this.id).subscribe(next => {
        this.book = next;
        this.deleted = false;
      }, error => console.log(error));
    })
  }

  deleteThisBook() {
    this.bookSevice.deleteBook(this.id).subscribe(next => {this.message = this.book.title + "Has Deleted"});
    this.deleted = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
