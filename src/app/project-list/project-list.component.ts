import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import { ProjectService } from '../project.service'
import { Router } from '@angular/router';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  stringy: string;
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectsService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  goToDetailPage(clickedProject){
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
