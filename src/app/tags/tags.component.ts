import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
<<<<<<< HEAD
import { FoodService } from '../services/food/food.service';
=======
>>>>>>> 85ca61811c1a70aca7da293e12c94a95a60db485

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
 
  tags: Tag[] = [];
<<<<<<< HEAD
 
    constructor(private foodservice:FoodService){ }

    NgOnInit():void{
      this.tags=this.foodservice.getAllTags();
     

    }
  
   
}
=======
  
  constructor(){ }

}
>>>>>>> 85ca61811c1a70aca7da293e12c94a95a60db485
