import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule, UsersModule } from './modules';

@Module({
  imports: [PostsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
