import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ClovaModule } from './clova/clova.module';
import { RedisModule } from './common/cache/redis/redis.module';
import { LoggerModule } from './common/log/logger.module';
import { SpellModule } from './spell/spell.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SpellModule,
    ClovaModule,
    RedisModule.register(),
    LoggerModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
