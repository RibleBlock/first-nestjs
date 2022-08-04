import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'Todos os Usuários.';
  }

  getUser(id: number) {
    return `Usuário ${id}`;
  }
}
