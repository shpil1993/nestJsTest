import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.dev.env'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
