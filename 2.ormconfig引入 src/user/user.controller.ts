import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class createUser {
  @ApiProperty({
    description: '用户名'
  })
  username:string

  @ApiProperty({
    description: '密码'
  })
  password:string
}

@Controller('user')
@ApiTags('用户管理接口')
export class UserController {
  @Get()
  @ApiOperation({summary:'获取用户信息'})
  index(){
    return [
      {in:1},
      {in:1},
      {in:1},
    ]
  }
  @Post('getInfo')
  @ApiOperation({summary:'更新用户信息'})
  getInfo(@Body() Body:createUser){
    return {
      Body
    }
    
  }
}
