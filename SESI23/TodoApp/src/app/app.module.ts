import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoDashboardModule } from './todo-dashboard/todo-dashboard.module';
import { NoEncapsulationComponent } from './view-encapsulation/no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from './view-encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './view-encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TemplateReactiveFormComponent } from './components/template-reactive-form/template-reactive-form.component';
import { AddTodoReactiveFormComponent } from './components/add-todo-reactive-form/add-todo-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    AddTodoFormComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    TemplateDrivenFormComponent,
    TemplateReactiveFormComponent,
    AddTodoReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoDashboardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
