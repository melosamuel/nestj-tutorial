import {
    Controller,
    Get,
    Req
} from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    getAllCats(@Req() request: Request): string {
        return 'This action returns all cats';
    }
}
