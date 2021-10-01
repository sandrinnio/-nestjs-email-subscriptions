import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Subscriber {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;
}

export default Subscriber;
