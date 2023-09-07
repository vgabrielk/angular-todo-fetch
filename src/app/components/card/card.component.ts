import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TodoType {
  title: string;
  description: string;
  completed: true;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent {
  data: TodoType[] = [];
  loading : boolean = true;
  url: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {
    this.getData()
  }

  getData(){
    this.http
    .get<TodoType[]>(`${this.url}/todos`)
    .subscribe((data) => {
      this.data = data;
      this.loading = false
    });
  }
}
