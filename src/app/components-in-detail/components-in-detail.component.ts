import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-components-in-detail',
  templateUrl: './components-in-detail.component.html',
  styleUrls: ['./components-in-detail.component.scss']
})
export class ComponentsInDetailComponent implements OnInit {
  posts: Post[] = [
    { title: 'Angular', text: 'Учу Angular', id: 1 },
    { title: '2050', text: 'Все еще учу Angular', id: 2 }
  ];

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('Timeout');
    //   this.posts[0] = { title: 'New', text: 'Angular', id: 11 };
    // }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log(id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
