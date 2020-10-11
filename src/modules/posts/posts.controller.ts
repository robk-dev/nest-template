import { Controller, Get, Post, Body, Param, HttpException } from '@nestjs/common';
import { CreatePostDto, IPost } from './posts.dto'
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController {

    constructor(private readonly postService: PostsService) { }

    @Post()
    create(@Body() createPostDto: CreatePostDto): IPost {
        return this.postService.create(createPostDto);
    }

    @Get()
    findAll(): IPost[] {
        return this.postService.findAll();
    }

    @Get(':id')
    find(@Param() params: { id: number | null }): IPost {
        const { id = '' } = params;
        if (!id) {
            throw new HttpException('Missing or invalid id', 400);
        }
        return this.postService.findById(Number(id));
    }
}