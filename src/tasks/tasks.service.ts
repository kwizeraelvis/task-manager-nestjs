import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v4';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
   private tasks: Task[] = [];
   
   getAllTasks(): Task[]{
       return this.tasks;
   }

   getTaskById(id: string){
       return this.tasks.find(task => task.id === id);
   }

   createTask(createTaskDto: CreateTaskDto): Task{
       const {title, description } = createTaskDto;
       const task : Task ={
           id: uuid(),
           title,
           description,
           status: TaskStatus.OPEN
       }
       this.tasks.push(task);
       return task;
   }

   deleteTask(id: string){
       const task = this.getTaskById(id);
       const taskIndex = this.tasks.indexOf(task);
       this.tasks.splice(taskIndex, 1);
       return {};
   }
}
