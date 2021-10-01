import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './entities/subscriber.entity';
import { SubscribersController } from './subscribers.controller';
import { SubscribersRepository } from './subscribers.repository';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  controllers: [SubscribersController],
  providers: [SubscribersService, SubscribersRepository],
})
export class SubscribersModule {}
