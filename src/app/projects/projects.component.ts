import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  proyectos$: Observable<Project[]>;
  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.proyectos$ = this.projectService.getAll();
  }
}
