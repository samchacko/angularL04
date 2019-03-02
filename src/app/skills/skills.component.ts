import { Component, OnInit } from '@angular/core';

import { SkillsComponent } from './skills.component';
import { Level } from '../types/level.enum';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // skills = ['Math', 'CS', 'Ruby on Rails', 'Angular'];

  skills: Skill[] = [
    {
      id: 0,
      name: 'Mathematics',
      level: Level.Expert
    },
    {
      id: 1,
      name: 'CS',
      level: Level.Expert
    },
    {
      id: 2,
      name: 'Ruby on Rails',
      level: Level.Advanced
    },
    {
      id: 3,
      name: 'Angular',
      level: Level.Intermediate
    }
  ];
  constructor() { 

  }

  ngOnInit() {
  }

}
