import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';
import { NewProjectComponent } from './new-project/new-project.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'viewerproject',
        component: ViewerProjectComponent
      },
      {
        path: 'viewerproject/:id',
        component: ViewerProjectComponent
      },
      {
        path: 'newproject',
        component: NewProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
