import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IBooks} from '../ibooks';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book: IBooks;
  id: number;
  subscription: Subscription;

  constructor(
    private bookSevice: BookService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
       const id = +paramMap.get('id');
      this.bookSevice.findBookById(id).subscribe(data => {
        this.book = data;
      });
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
