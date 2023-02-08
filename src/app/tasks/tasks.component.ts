import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tservice: TaskService){}
  

  ngOnInit(): void{
    this.tservice.getTasks().subscribe((tasks) => this.tasks = tasks);

  }
  deleteTask(task: Task){
    this.tservice.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
  toggleTask(task: Task){
    task.reminder = !task.reminder;
    this.tservice.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task){
    this.tservice.addTask(task).subscribe((task)=> (this.tasks.push(task)));
  }


}
