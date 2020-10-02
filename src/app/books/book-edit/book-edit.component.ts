import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBooks} from '../ibooks';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {

  id: number;
  book: IBooks;
  editBookForm: FormGroup;
  message: string;
  subscription: Subscription;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editBookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(100)]]
    });
    this.subscription = this.ActivatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.id = +paramMap.get("id");
    }, error => console.log(error));
    this.bookService.findBookById(this.id).subscribe(data => {
      this.editBookForm.patchValue(data);
    }, error => console.log(error));
  }

  submit() {
    let bookcons: IBooks;
    const updatedBook = this.editBookForm.value;
    this.bookService.updateBook(this.id, updatedBook).subscribe(data => {bookcons = data;} );
    this.message = 'Saved Book';
  }

  get title() {
    return this.editBookForm.get('title');
  }
  get author() {
    return this.editBookForm.get('author');
  }
  get description() {
    return this.editBookForm.get('description');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
