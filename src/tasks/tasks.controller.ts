import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService : TasksService){}

    @Get()
    getAllTasks(){
      return this.taskService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string){
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task{
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void{
        this.taskService.deleteTask(id);
    }

    @Patch('/:id')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus
        ): Task{
            return this.taskService.updateTaskStatus(id, status);
        }
}
