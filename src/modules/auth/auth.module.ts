import { Module } from '@nestjs/common'

import { OtpService } from '@/modules/otp/otp.service'
import { TokenService } from '@/modules/token/token.service'
import { UserRepository } from '@/shared/repositories'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	controllers: [AuthController],
	providers: [AuthService, OtpService, UserRepository, TokenService]
})
export class AuthModule {}
