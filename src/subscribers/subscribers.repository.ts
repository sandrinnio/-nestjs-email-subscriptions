import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Subscriber from './entities/subscriber.entity';

@Injectable()
export class SubscribersRepository {
  constructor(
    @InjectRepository(Subscriber)
    private readonly subscriberRepository: Repository<Subscriber>,
  ) {}

  getAllSubscribers() {
    return this.subscriberRepository.find();
  }

  createSubscriber(subscriber: Subscriber) {
    const newSubscriber = this.subscriberRepository.create(subscriber);
    return this.subscriberRepository.save(newSubscriber);
  }

  async removeSubscriber(subscriberId: string) {
    const deleteResponse = await this.subscriberRepository.delete(subscriberId);
    if (!deleteResponse.affected) {
      throw new NotFoundException(subscriberId);
    }
  }
}
