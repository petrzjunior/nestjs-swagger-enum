import { IsEnum } from 'class-validator';

export enum Size {
  SMALL = 1,
  BIG = 2,
}

export class TshirtDto {
  @IsEnum(Size)
  size: Size;
}
