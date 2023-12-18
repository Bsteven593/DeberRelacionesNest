import { IsArray, IsDateString, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateAutorDto {
    @IsOptional()
    @IsNumber({}, { message: 'El ID debe ser un número' })
    id?: number;

    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    Nombre: string;

    @IsDateString()
    fechaNacimiento: string;

    @IsOptional()
    @IsString({ message: 'La nacionalidad debe ser una cadena de texto' })
    @MaxLength(100, { message: 'La nacionalidad no puede tener más de 100 caracteres' })
    nacionalidad?: string;

    @IsOptional()
    @IsString({ message: 'El género literario debe ser una cadena de texto' })
    @MaxLength(100, { message: 'El género literario no puede tener más de 100 caracteres' })
    generoLiterario?: string;

    @IsOptional()
    @IsArray({ message: 'La lista de libros debe ser un array' })
    listaBooks?: string[];
}
