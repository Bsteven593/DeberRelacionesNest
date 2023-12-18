import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { PaginacionDto } from 'src/common/Dto/paginacion-dto';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  create(@Body() createAutorDto: CreateAutorDto) {
    return this.autorService.create(createAutorDto);
  }

  @Get()
  findAll(@Query() paginacionDto : PaginacionDto) {
    return this.autorService.findAll(paginacionDto);
  }

  @Get(':id')
  findOneBy(@Param('id') id: number) {
    return this.autorService.findOneBy(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorService.update(+id, updateAutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.autorService.delete(+id);
  }
}
