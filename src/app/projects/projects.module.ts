import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterprojectsformComponent } from './filterprojectsform/filterprojectsform.component';
import { ProjectslistComponent } from './projectslist/projectslist.component';
import { NewProjectformComponent } from './new-projectform/new-projectform.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent, NewProjectformComponent, DashboardComponent, FilterprojectsformComponent, ProjectslistComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
