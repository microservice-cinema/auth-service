import { ClassConstructor, plainToClass } from 'class-transformer'
import { validateSync } from 'class-validator'

export function validateEnv<T extends object>(
	config: Record<string, string | undefined>,
	envVariableClass: ClassConstructor<T>
) {
	const validatedConfig = plainToClass(envVariableClass, config, {
		enableImplicitConversion: true // auto string to number conversion
	})

	const errors = validateSync(validatedConfig, {
		skipMissingProperties: false // if there are no env variables, an error is thrown.
	})

	if (errors.length > 0) {
		const errorMsg = errors
			.map(error => {
				const constraints = error.constraints || {}
				return (
					`\nError: in ${error.property}:\n` +
					Object.entries(constraints)
						.map(([key, value]) => `+ ${key}: ${value}`)
						.join('\n')
				)
			})
			.join('\n') // Fixed: changed 'n' to '\n'

		console.error(`\n${errors.toString()}`)

		throw new Error(errorMsg)
	}

	return validatedConfig
}
