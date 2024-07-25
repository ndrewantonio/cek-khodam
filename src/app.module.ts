import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterKhodamModule } from './modules/master-khodam/master-khodam.module';

@Module({
  imports: [MasterKhodamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
