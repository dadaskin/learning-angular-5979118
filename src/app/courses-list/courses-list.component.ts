import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
  title: string = "Available Stuff";
  courses = [
    { id:1, title: 'Into to Ang.', description: 'Basics', price: 49, date: '2025-03-01', soldOut: false, img: 'angular-logo.png' },
    { id:2, title: 'Adv. Ang.', description: 'More', price: 99, date: '2024-04-01', soldOut: true, img: 'angular-logo.png' },
  ];
}
