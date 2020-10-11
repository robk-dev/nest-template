import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [PostsController],
            providers: [PostsService],
        }).compile();
    });

    describe('getHello', () => {
        it('should return "Hello World!"', () => {
            const postsController = app.get<PostsController>(PostsController);
            expect(postsController).toBeDefined();
        });
    });
});
