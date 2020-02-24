import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post4 title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque cum
        distinctio dolore eaque earum eos inventore minima neque nesciunt omnis
        perspiciatis placeat, possimus quae quibusdam recusandae sint ullam ut!
      </p>
    </div>
  `,
  styles: [
    `
      .post4 {
        padding: 0.5rem;
        border: 2px solid blue;
      }
    `
  ]
})
export class Post4Component {}
