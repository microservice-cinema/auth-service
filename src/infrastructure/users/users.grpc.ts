import type {
	CreateUserRequest,
	UsersServiceClient
} from '@microservice-cinema/contracts/gen/users'
import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import type { ClientGrpc } from '@nestjs/microservices'

@Injectable()
export class UsersClientGrpc implements OnModuleInit {
	private userService: UsersServiceClient

	public constructor(
		@Inject('USERS_PACKAGE') private readonly client: ClientGrpc
	) {}

	public onModuleInit() {
		this.userService =
			this.client.getService<UsersServiceClient>('UsersService')
	}

	public create(request: CreateUserRequest) {
		return this.userService.createUser(request)
	}
}
