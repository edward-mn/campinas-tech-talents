import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CostumerDto {
  @IsString()
  name: string

  @IsNumber()
  age: number

  @IsString()
  @IsNotEmpty()
  document: string
}
