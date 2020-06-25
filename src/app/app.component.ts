import { Component } from '@angular/core';
import { lorem } from 'faker'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  randomText = lorem.sentence();
  ehab = 0;
  entered = '';
  change(value: string) {
    this.entered = value;
    if(this.randomText === value) {
      this.ehab = 1;
    }
    else {
      this.ehab = 0;
    }
    
  }

  getClass(letter: string, enteredLetter: string)
   {
     if(!enteredLetter) {
       return 'Pending';
     }
     if(enteredLetter===letter) 
     {
       return 'Active'
     }
     else 
     {
       return 'Deactive';
     }
   }
}
