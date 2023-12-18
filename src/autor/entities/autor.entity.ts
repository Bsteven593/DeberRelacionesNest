import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.entity";

@Entity()
export class Autor {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar')
  Nombre: string;

  @Column('varchar')
  fechaNacimiento: string;

  @Column('varchar', { nullable: true })
  nacionalidad: string;

  @Column('varchar', { nullable: true })
  generoLiterario: string;

  // Agrega más campos según sea necesario

  @OneToMany(
    () => Book,
    (book) => book.autor,
    {
      cascade: true,
      eager: true,
    }
  )
  listaBooks?: Book[];
}
