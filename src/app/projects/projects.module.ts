import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';


@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
