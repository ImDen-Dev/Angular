import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  arr = [1, 1, 2, 3, 5, 8, 13];

  obj = [
    {
      title: 'Post 1',
      author: 'Den',
      comment: [
        { name: 'Ivan', text: 'Lorem 1' },
        { name: 'Ivan', text: 'Lorem 2' },
        { name: 'Ivan', text: 'Lorem 3' },
        { name: 'Ivan', text: 'Lorem 4' }
      ]
    },
    {
      title: 'Post 2',
      author: 'Ivan',
      comment: [
        { name: 'Den', text: 'Lorem 1' },
        { name: 'Den', text: 'Lorem 2' },
        { name: 'Den', text: 'Lorem 3' },
        { name: 'Den', text: 'Lorem 4' }
      ]
    }
  ];
}
