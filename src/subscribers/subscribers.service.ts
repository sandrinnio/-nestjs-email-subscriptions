import { Injectable } from '@nestjs/common';
import { SubscribersRepository } from './subscribers.repository';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Injectable()
export class SubscribersService {
  constructor(private readonly subscribersRepository: SubscribersRepository) {}

  getAllSubscribers() {
    return this.subscribersRepository.getAllSubscribers();
  }

  createSubscriber(createSubscriber: CreateSubscriberDto) {
    return this.subscribersRepository.createSubscriber(createSubscriber);
  }

  removeSubscriber(subscriberId: string) {
    return this.subscribersRepository.removeSubscriber(subscriberId);
  }
}
