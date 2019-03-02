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

  // skills = ['Math', 'CS', 'Ruby on Rails', 'Angular'];

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.skills;
  }

  ngOnInit() {
  }

}
