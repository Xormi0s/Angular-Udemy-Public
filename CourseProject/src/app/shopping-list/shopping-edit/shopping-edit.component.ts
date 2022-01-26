import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { shoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;
  @ViewChild('f') inputform: NgForm;

  constructor(private shoppinglistService: shoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe((index: number) =>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editItem = this.shoppinglistService. getIngredientsIndex(index);
      this.inputform.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    });
  }

  onSubmit(form: NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppinglistService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.inputform.reset();
  }

  onClear(){
    this.inputform.reset();
    this.editMode = false;
  }

  onDelete(){
    this.inputform.reset();
    this.editMode = false;
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
