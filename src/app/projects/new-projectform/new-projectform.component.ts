import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-projectform',
  templateUrl: './new-projectform.component.html',
  styles: []
})
export class NewProjectformComponent implements OnInit {
  @Input() title: String;
  @Output() public save = new EventEmitter<Project>();
  
  public newProjectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.newProjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]]});
    
  }

  public saveProject() {
    const project: Project = this.newProjectForm.value;
    this.save.emit(project);
  }

}
