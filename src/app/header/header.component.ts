import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: String = 'TASK MANAGER';
  showAddTask!: boolean;
  subscription!: Subscription;

  toggleAddTask(){
    this.uiservice.toggleAddTask();
  }
  constructor(private uiservice: UiService){
    this.subscription = this.uiservice.onToggle().subscribe((value) => (this.showAddTask = value));
  }

}
