import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  addBookForm: FormGroup;
  message: string;
  constructor(private fb: FormBuilder,
              private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  submit() {
    const data = this.addBookForm.value;
    console.log(data);
    this.bookService.createBook(data).subscribe(datasave => {
      console.log(datasave);
    });
    console.log(this.bookService.getAllBooks());
    this.message = 'Add success';
  }
  get title() {
    return this.addBookForm.get('title');
  }
  get author() {
    return this.addBookForm.get('author');
  }
  get description() {
    return this.addBookForm.get('description');
  }

}
