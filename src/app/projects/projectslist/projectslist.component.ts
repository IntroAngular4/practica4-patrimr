import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styles: []
})
export class ProjectslistComponent implements OnInit {
  @Input() public projects: Project[];
  public filterProjects: Project[];

  constructor() { 
   
  }

  ngOnInit() {
    this.filterProjects = this.projects;
  }

}
