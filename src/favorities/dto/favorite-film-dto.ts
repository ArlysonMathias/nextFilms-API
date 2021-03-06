import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavoriteFilmDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que vai favoritar o filme',
    example: 'f3f444cd-99b2-4ba8-a321-cb67ffba8b2e',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do filme a ser favoritado',
    example: 'A era do gelo',
  })
  filmName: string;
}
