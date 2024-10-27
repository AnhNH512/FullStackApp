import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashPassword } from '@/helpers/util';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    // throw error when email exist
    // if (this.userModel.findOne({ where: { email: createUserDto.email } })) {
    //   throw new ConflictException('Email aready exists');
    // }
    // create new user
    // const hashPass = await hashPassword(createUserDto.password);
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return this.userModel.findById(+id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: +id }, { $set: updateUserDto });
  }

  remove(id: number) {
    this.userModel.deleteOne({ id: +id });
  }
}
