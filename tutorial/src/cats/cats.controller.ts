import {
    Controller,
    Get,
    Post,
    Body,
    Req
} from '@nestjs/common';
import type {
    Request
} from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsServices: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsServices.create(createCatDto);
    }
    
    @Get()
    async getAll(@Req() request: Request): Promise<Cat[]> {
        return this.catsServices.getAll();
    }
}
