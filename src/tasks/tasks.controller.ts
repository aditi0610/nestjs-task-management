// controller decorator accepts a string, which is the path to be handled by the controller
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController 
{
    constructor(private tasksService: TasksService){ } // TasksService ko constructor ke through use karne ke liye inject kiya gaya hai

    @Get()
      getAllTasks(): Task[] {
        // return 'Hello';
        return this.tasksService.getAllTasks();
      }

      //add POST endpoint to create a new task using TasksService
      @Post()
       createTask(
        @Body('title') title: string,
        @Body('description') description: string,
       ): Task {
           return this.tasksService.createTask(title, description);
       }
        
   
}
