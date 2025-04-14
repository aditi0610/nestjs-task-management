// controller decorator accepts a string, which is the path to be handled by the controller
import { Controller } from '@nestjs/common';

@Controller('tasks')
export class TasksController {}
