import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { Book } from './entities/book.entity';

@Module({
  controllers: [AutorController],
  providers: [AutorService],
  imports:[TypeOrmModule.forFeature([Autor, Book])]
})
export class AutorModule {
  
}
