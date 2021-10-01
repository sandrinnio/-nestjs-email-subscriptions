import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @MessagePattern({ cmd: 'get-all-subscribers' })
  getAllSubscribers() {
    return this.subscribersService.getAllSubscribers();
  }

  @MessagePattern({ cmd: 'create-subscriber' })
  async createSubscriber(
    @Payload() createSubscriber: CreateSubscriberDto,
    @Ctx() context: RmqContext,
  ) {
    const newSubscriber = await this.subscribersService.createSubscriber(
      createSubscriber,
    );
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
    return newSubscriber;
  }

  @MessagePattern({ cmd: 'remove-subscriber' })
  removeSubscriber(@Payload() subscriberId: string) {
    return this.subscribersService.removeSubscriber(subscriberId);
  }
}
