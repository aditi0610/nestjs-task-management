// controller decorator accepts a string, which is the path to be handled by the controller
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController 
{
    constructor(private tasksService: TasksService){ } // TasksService ko constructor ke through use karne ke liye inject kiya gaya hai
    
    //http://localhost:3000/tasks
    // @Get()
    //   getAllTasks(): Task[] {
    //     // return 'Hello';
    //     return this.tasksService.getAllTasks();
    //   }
    
    //http://localhost:3000/tasks/hajdhjh1223bbjb44
    // @Get('/:id')
    //    getTaskById(@Param('id') id: string): Task {
    //      return this.tasksService.getTaskById(id);
    //    }
         
       // Handles POST request to create a new task using data from CreateTaskDto
      // Automatically maps and validates the request body with class-validator decorators
    // @Post()
    //    createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    //        return this.tasksService.createTask(CreateTaskDto);
    //    }

    // @Delete('/:id')
    //    deleteTask(@Param('id') id: string): void {
    //        return this.tasksService.deleteTask(id);
    //    }
        
   
}
