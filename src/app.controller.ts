import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { AppService } from './app.service';

class NoteDto {
  id?: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Controller()
export class AppController {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly appService: AppService,
  ) {}

  @Get()
  async listNotes() {
    const notes = await this.databaseService.note.findMany();

    return notes;
  }

  @HttpCode(201)
  @Post()
  async createNote(@Body() noteDto: NoteDto) {
    const note = await this.databaseService.note.create({
      data: noteDto,
    });

    return note;
  }

  @Get(':noteId')
  async getNote(@Param('noteId') noteId: string) {
    const note = await this.databaseService.note.findUnique({
      where: { id: noteId },
    });

    return note;
  }

  getHello() {
    return this.appService.getHello();
  }
}
