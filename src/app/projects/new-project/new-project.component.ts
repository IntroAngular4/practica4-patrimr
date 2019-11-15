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
  public project: Project;
  
 // public projects = environment.projects;
  proyectos$: Observable<Project[]>;
  constructor(private projects: ProjectsService) {}
  
  ngOnInit() {
      this.proyectos$ = this.projects.getCount();
  }
  public saveProject(project: Project,  id: number) {
    // this.projects.push({ ...this.project });
    // environment.projects = this.projects;

    project.id= id;
   
    this.projects.create(project)
  }
}