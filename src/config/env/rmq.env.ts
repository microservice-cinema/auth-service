import { registerAs } from '@nestjs/config'

import { RmqConfig } from '@/config'
import { RmqValidator } from '@/config/validators/rmq.validator'
import { validateEnv } from '@/shared/utils'

export const rmqEnv = registerAs<RmqConfig>('rmq', () => {
	validateEnv(process.env, RmqValidator)

	return {
		url: process.env.RMQ_URL
	}
})
