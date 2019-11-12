import { Component, OnInit } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { ProjectsService } from '../projects.service';
import { Project } from '../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styles: []
})
export class ViewerProjectComponent implements OnInit {
  //public projectId = '';
  //projects = environment.projects;
  //public proyecto: Project;
  public projectId: number;
  public project$: Observable<Project>;
  constructor(private projectService: ProjectsService,activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project$ = this.projectService.getById(this.projectId);
  }

}
