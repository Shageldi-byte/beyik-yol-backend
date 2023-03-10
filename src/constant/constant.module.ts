import { Module } from '@nestjs/common';
import { ConstantService } from './constant.service';
import { ConstantController } from './constant.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ConstantController],
  providers: [ConstantService]
})
export class ConstantModule {}
