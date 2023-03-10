import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { ConstantService } from './constant.service';
import { CreateConstantDto } from './dto/create-constant.dto';
import { UpdateConstantDto } from './dto/update-constant.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ConstantTypes } from "@prisma/client";

@Controller('constant')
export class ConstantController {
  constructor(private readonly constantService: ConstantService) {}

  @Post('create-constant')
  @UseGuards(JwtAuthGuard)
  create(@Body() createConstantDto: CreateConstantDto) {
    return this.constantService.create(createConstantDto);
  }

  @Get('get-all-constants')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.constantService.findAll();
  }

  @Get('get-constant-by-type?')
  findByType(@Query("type") type: ConstantTypes) {
    return this.constantService.findByType(type);
  }


  @Patch('update-constant/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateConstantDto: CreateConstantDto) {
    return this.constantService.update(+id, updateConstantDto);
  }

  @Delete('delete-constant/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.constantService.remove(+id);
  }
}
