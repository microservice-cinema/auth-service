import {Module} from '@nestjs/common'

import {AuthController} from './auth.controller'
import {AuthService} from './auth.service'
import {AuthRepository} from "@/modules/auth/auth.repository";
import {PrismaModule} from "@/infrastructure/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [AuthController],
    providers: [AuthService, AuthRepository]
})
export class AuthModule {}
