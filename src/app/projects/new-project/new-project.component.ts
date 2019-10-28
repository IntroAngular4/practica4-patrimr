import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {
  public title = 'Novo proxecto';
  public project: Project;
  public projects = environment.projects;
  constructor() {}

  ngOnInit() {
    this.project = {
      id: this.projects.length,
      name: ''
    };
  }
  public newProject() {
    this.project.id = this.projects.length;
    this.projects.push({ ...this.project });
    environment.projects = this.projects;
  }
}
