import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import { ProjectService } from '../project.service'

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectsService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
