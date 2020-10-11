import { Injectable } from '@nestjs/common';
import { IPost } from './posts.dto';
import { CreatePostDto } from './posts.dto';

@Injectable()
export class PostsService {
    private readonly posts: IPost[] = [];

    create(dto: CreatePostDto): IPost {
        const post = {
            id: this.posts.length,
            ...dto
        };
        this.posts.push(post);
        return post;
    }

    findAll(): IPost[] {
        return this.posts;
    }

    findById(id: number): IPost {
        // return this.posts[id];
        return this.posts.find(p => p.id == id);
    }
}