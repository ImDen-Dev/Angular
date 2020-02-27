import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from './post4/post4.component';
import { StartComponent } from './start/start.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { IfElseComponent } from './if-else/if-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentsInDetailComponent } from './components-in-detail/components-in-detail.component';
import { PostFormComponent } from './components-in-detail/post-form/post-form.component';
import { PostsComponent } from './components-in-detail/posts/posts.component';
import { DirectivesComponent } from './directives/directives.component';
import { StyleDirective } from './directives/directive/style.directive';
import { IfnotDirective } from './directives/directive/ifnot.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
    StartComponent,
    TwoWayBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    IfElseComponent,
    NgSwitchComponent,
    NgForComponent,
    PipesComponent,
    ComponentsInDetailComponent,
    PostFormComponent,
    PostsComponent,
    DirectivesComponent,
    StyleDirective,
    IfnotDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
