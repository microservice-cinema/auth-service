import { PassportOptions } from '@microservice-cinema/passport'
import { ConfigService } from '@nestjs/config'

import type { AllConfigs } from '@/config'

export function getPassportConfig(
	configService: ConfigService<AllConfigs>
): PassportOptions {
	return {
		secretKey: configService.get('passport.secretKey', {
			infer: true
		})
	}
}
