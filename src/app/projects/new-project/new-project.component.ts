import { Component, OnInit } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { ProjectsService } from '../projects.service';
import { Project } from '../models/project.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {
  public title = 'Novo proxecto';
  proyectos$: Observable<Project[]>;
  public project: Project;
 // public projects = environment.projects;
  constructor( private projects: ProjectsService) {}

  ngOnInit() {
    // this.project = {
    //   id: this.projects.length,
    //   name: ''
    // };
    //this.proyectos$ = this.projects.getCount();
  }
  public saveProject(project: Project) {
    // this.project.id = this.projects.length;
    // this.projects.push({ ...this.project });
    // environment.projects = this.projects;
    this.projects.create(project);
  }
}
