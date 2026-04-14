import type {
	DatabaseConfig,
	GrpcConfig,
	PassportConfig,
	RedisConfig,
	TelegramConfig
} from '@/config'

export interface AllConfigs {
	database: DatabaseConfig
	grpc: GrpcConfig
	passport: PassportConfig
	redis: RedisConfig
	telegram: TelegramConfig
}
