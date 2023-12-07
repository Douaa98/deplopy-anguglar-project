import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  
  @Input()
  foodPageTags?:string[]
  tags?: Tag[] ;

    constructor(private foodservice:FoodService){ }

    NgOnInit():void{
      if (!this.foodPageTags)
      this.tags=this.foodservice.getAllTags();
      
      
    }
  
   
}
