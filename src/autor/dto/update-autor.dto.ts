import { IsArray, IsDateString, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateAutorDto {
    @IsOptional()
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
    Nombre?: string;

    @IsOptional()
    @IsDateString()
    fechaNacimiento?: string;

    @IsOptional()
    @IsString({ message: 'La nacionalidad debe ser una cadena de texto' })
    @MaxLength(100, { message: 'La nacionalidad no puede tener más de 100 caracteres' })
    nacionalidad?: string;

    @IsOptional()
    @IsString({ message: 'El género literario debe ser una cadena de texto' })
    @MaxLength(100, { message: 'El género literario no puede tener más de 100 caracteres' })
    generoLiterario?: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    listaBooks?: string[];
    
}
