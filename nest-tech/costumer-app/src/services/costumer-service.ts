import { ConflictException, Injectable } from "@nestjs/common";
import { CostumerDto } from "src/dto/create-Costumer.dto";
import { Costumer } from "src/interfaces/costumer.interface";

@Injectable()
export class costumerService{
  private readonly costumers:Costumer[] = [{
    name: 'Edward',
    age: 21,
    document: "2149789789987"
  }];

  //this.costumers.push(createCostumerDto);

  createCostumer(createCostumerDto: CostumerDto) {
    this.costumers.filter(costumer => {
      if(costumer.document === createCostumerDto.document){
        throw new ConflictException("Costumer already exists or Age is to old.");
      };
    })
  
    const isToOldCostumer = createCostumerDto.age > 105;
    if(isToOldCostumer){
        throw new ConflictException("Costumer to old!");
    }
  }

  findAll(): Costumer[] {
    return this.costumers;
  }

}