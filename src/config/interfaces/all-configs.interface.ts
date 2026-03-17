import type {
	DatabaseConfig,
	GrpcConfig,
	PassportConfig,
	RedisConfig
} from '@/config'

export interface AllConfigs {
	database: DatabaseConfig
	grpc: GrpcConfig
	passport: PassportConfig
	redis: RedisConfig
}
