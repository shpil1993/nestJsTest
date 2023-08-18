import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { dataSourceConstants } from 'src/helpers/constants';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDto } from './users.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor (@Inject(dataSourceConstants.userRepository) private userRepository: Repository<User>) {}

    public async findByEmail(email: string) : Promise<User | undefined> {
        return (await this.userRepository.find()).find(user => user.email === email);
    }

    public async createUser(userDto: UserDto) : Promise<boolean> {
        try {
            let user = this.userRepository.create();

            let salt = await bcrypt.genSalt();
            let hash = await bcrypt.hash(userDto.password, salt);

            user.userName = userDto.name;
            user.email = userDto.email;
            user.password = hash;

            await User.save(user);

            return true;
        } catch {
            throw new InternalServerErrorException();
        }
    }
}
