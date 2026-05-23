import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { MessagingModule } from '@/infrastructure/messaging/messaging.module'
import { PrismaModule } from '@/infrastructure/prisma/prisma.module'
import { RedisModule } from '@/infrastructure/redis/redis.module'
import { UsersModule } from '@/infrastructure/users/users.module'
import { AccountModule } from '@/modules/account/account.module'
import { AuthModule } from '@/modules/auth/auth.module'
import { OtpModule } from '@/modules/otp/otp.module'
import { TelegramModule } from '@/modules/telegram/telegram.module'
import { TokenModule } from '@/modules/token/token.module'

import {
	databaseEnv,
	grpcEnv,
	passportEnv,
	redisEnv,
	rmqEnv,
	telegramEnv
} from './config'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [
				databaseEnv,
				grpcEnv,
				passportEnv,
				redisEnv,
				telegramEnv,
				rmqEnv
			]
		}),
		OtpModule,
		TokenModule,
		PrismaModule,
		MessagingModule,
		RedisModule,
		AuthModule,
		AccountModule,
		TelegramModule,
		TokenModule,
		UsersModule
	]
})
export class AppModule {}
