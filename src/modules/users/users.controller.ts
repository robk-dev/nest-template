import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    @Post()
    create(@Res() res: Response) {
        return res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response) {
        return res.status(HttpStatus.OK).json([]);
    }
}