import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styles: []
})
export class ViewerProjectComponent implements OnInit {
  public projectId = '';
  projects = environment.projects;
  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }
}
