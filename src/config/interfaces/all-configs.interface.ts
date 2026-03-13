import type { DatabaseConfig, GrpcConfig, RedisConfig } from '@/config'

export interface AllConfigs {
	database: DatabaseConfig
	grpc: GrpcConfig
	redis: RedisConfig
}
