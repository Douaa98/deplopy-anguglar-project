import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
 
  tags: Tag[] = [];
 
    constructor(){ }
   
}
