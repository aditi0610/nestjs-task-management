import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {
     
    @ApiProperty() //generate API documentation in Swagger UI
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty() //generate API documentation in Swagger UI
    @IsNotEmpty()
    @IsString()
    description: string;


}
