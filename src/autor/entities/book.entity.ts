import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autor } from "./autor.entity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  titulo: string;


  @ManyToOne(
    ()=>Autor,
    (autor)=>autor.listaBooks,{onDelete:'CASCADE'}
  )
 autor?:Autor
 
}