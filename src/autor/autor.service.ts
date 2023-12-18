import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { Repository } from 'typeorm';
import { PaginacionDto } from 'src/common/Dto/paginacion-dto';
import { Book } from './entities/book.entity';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private readonly autorRepository: Repository<Autor>,
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,


  ) {}

  async create(createAutorDto: CreateAutorDto) {
    try {
      
      const {listaBooks=[], ...autorDelalles} = createAutorDto
      const nuevoAutor = this.autorRepository.create(
      {
        ...autorDelalles,
        listaBooks:listaBooks.map(listaBooks=>this.bookRepository.create({ titulo:listaBooks}))

      }
      );
      await this.autorRepository.save(nuevoAutor);
      return {...nuevoAutor,listaBooks};
    } catch (error) {
      console.log(error);
      throw new Error('No se puede crear el autor');
    }
  }

  async findAll(paginacionDto:PaginacionDto) {
    const {limit=10, offset=1}=paginacionDto
    const autores= await this.autorRepository.find({
      take:limit,
      skip:offset,
      relations:{
        listaBooks:true
      }
    })
    return autores.map(autor =>(
      {
        ...autor,
        listaBooks:autor.listaBooks.map(titlel=>titlel.titulo)
      }
    ) )
  }

  async findOneBy(id: number) {
    const autor = await  this.autorRepository.findOneBy({id});

    if (!autor) {
      throw new NotFoundException('No existe el autor');
    }
    return autor;
  }

  async update(id: number, updateAutorDto: UpdateAutorDto) {
    const autor = await this.autorRepository.preload({
      id: id,
      ...updateAutorDto,
      listaBooks: updateAutorDto.listaBooks.map((titulo) => ({ titulo })),
    });

    if (!autor) {
      throw new NotFoundException('No se puede actualizar, el autor no existe');
    }

    await this.autorRepository.save(autor);
    return autor;
  }

  async delete(id: number) {
    const autor = await this.findOneBy(id);
    return this.autorRepository.delete(id);
  }
}
