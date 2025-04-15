import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {

    @ApiProperty() //generate API documentation in Swagger UI
    title: string;

    @ApiProperty() //generate API documentation in Swagger UI
    description: string;


}
