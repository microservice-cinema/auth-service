import { Module } from '@nestjs/common'

import { AuthRepository } from '@/modules/auth/auth.repository'
import { OtpService } from '@/modules/otp/otp.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	controllers: [AuthController],
	providers: [AuthService, AuthRepository, OtpService]
})
export class AuthModule {}
