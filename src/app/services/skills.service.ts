import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
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

  constructor() { }
}
