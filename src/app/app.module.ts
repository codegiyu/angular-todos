import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskSingleComponent } from './components/task-single/task-single.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    LayoutComponent,
    NavComponent,
    HomeComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSemanticModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DragDropModule,
    TaskListComponent,
    TaskManagerComponent,
    SectionHeadingComponent,
    TaskSingleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
