import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { createGrpcServer } from '@/infrastructure/grpc/grpc.server'

import { AppModule } from './app.module'

async function bootstrap() {
	const logger = new Logger()

	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)

	createGrpcServer(app, config)

	await app.startAllMicroservices()
	await app.listen(9101)

	logger.log(`Auth service started`)
}
bootstrap()
