import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookCreateComponent} from './books/book-create/book-create.component';
import {BookDeleteComponent} from './books/book-delete/book-delete.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/add',
    component: BookCreateComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'details/:id',
    component: BookDetailsComponent
  }
  ];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
