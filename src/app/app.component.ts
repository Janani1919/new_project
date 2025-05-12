import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIcon,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Diana Prince' },
    { id: 5, name: 'Ethan Hunt' },
    { id: 6, name: 'Fiona Glenanne' },
    { id: 7, name: 'George Jetson' },
    { id: 8, name: 'Hannah Montana' },
    { id: 9, name: 'Ian Fleming' },
    { id: 10, name: 'Jane Doe' },
  ];

  currentPage: number = 1;
  pageSize: number = 4;

  paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
  }

  totalPages(): number {
    return Math.ceil(this.users.length / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToDetail(user: any) {
    // navigation logic here
    console.log('Navigating to', user.name);
  }

  confirmDelete(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== id);
      // adjust current page if needed
      if (this.currentPage > this.totalPages()) {
        this.currentPage = this.totalPages();
      }
    }
  }
}



