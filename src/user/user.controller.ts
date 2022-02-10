import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from '../entities/user.entity'

@Controller('user')
export class UserController {

  constructor(private readonly userSrvice: UserService) { }

  @Get()
  @ApiProperty({
    description: ' user 根目录'
  })
  root(): string {
    return this.userSrvice.root()
  }

  @Get('save')
  save(@Query() query): any {

    console.log(query)
    let user = new User()
    user.name = query.name
    user.age = Number(query.age)
    if (query.id) {
      user.id = Number(query.id)
    }

    return this.userSrvice.save(user)
  }

  @Get('get')
  @ApiOperation({ summary: '获取用户信息' })
  get(@Query() query): any {

    if (query.id) {
      query.id = Number(query.id)
    }
    if (query.age) {
      query.age = Number(query.age)
    }
    return this.userSrvice.get(query)
  }

  @Get('remove')
  remove(@Query() query): any {

    if (query.id) {
      query.id = Number(query.id)
    }
    if (query.age) {
      query.age = Number(query.age)
    }
    return this.userSrvice.remove(query)
  }

}
