import {
    Controller,
    Get,
    Post,
    Req,
    Res
} from '@nestjs/common';
import type {
    Request,
    Response
} from 'express';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Res() response: Response): Response {
        return response.status(201).send('This action creates a cat');
    }
    
    @Get()
    getAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}
