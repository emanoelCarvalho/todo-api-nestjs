import { IsBoolean, IsDate, IsEnum, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export type Priority = 'low' | 'medium' | 'high';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  done: boolean;

  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @IsEnum(['low', 'medium', 'high'])
  priority: Priority;
}
