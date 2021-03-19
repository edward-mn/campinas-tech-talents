import { BadRequestException, Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { CostumerDto } from 'src/dto/create-Costumer.dto';
import { costumerService } from 'src/services/costumer-service';
import { Costumer } from './../interfaces/costumer.interface';

@Controller('costumers')
export class CostumerController {

  constructor(private readonly costumerService : costumerService){

  }

  @Get()
  getCostumers():Costumer[]{
    return this.costumerService.findAll();
  }

  @Post()
  createCostumer(@Body() createCostumerDto : CostumerDto){

    this.costumerService.createCostumer(createCostumerDto);

    /*
    if(
      !createCostumerDto.name || 
      !createCostumerDto.age || 
      !createCostumerDto.document
    ){
      throw new BadRequestException();
    }

    const duplicateCostumer = this.costumers.filter(costumer => createCostumerDto.document === costumer.document);
    if(duplicateCostumer.length > 0){
        throw new ConflictException("Costumer already exists or Age");
    }
    */

    
  }
}