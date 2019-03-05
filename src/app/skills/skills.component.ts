import { Component, OnInit } from '@angular/core';

import { SkillsComponent } from './skills.component';

import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  dataService: SkillService;

  // skills = ['Math', 'CS', 'Ruby on Rails', 'Angular'];

  constructor(private skillsService: SkillsService) {
       this.dataService = this.skillsService;
  }
  
  ngOnInit() {
    this.dataService.getSkills().subscribe(skills=> this.skills=skills)
  }

}
