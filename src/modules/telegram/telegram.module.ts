import { Module } from '@nestjs/common'

import { UsersModule } from '@/infrastructure/users/users.module'
import { TelegramRepository } from '@/modules/telegram/telegram.repository'
import { TokenService } from '@/modules/token/token.service'
import { UserRepository } from '@/shared/repositories'

import { TelegramController } from './telegram.controller'
import { TelegramService } from './telegram.service'

@Module({
	imports: [UsersModule],
	controllers: [TelegramController],
	providers: [
		TelegramService,
		TelegramRepository,
		TokenService,
		UserRepository
	]
})
export class TelegramModule {}
