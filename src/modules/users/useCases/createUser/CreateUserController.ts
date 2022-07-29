import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    let user;
    try {
      user = this.createUserUseCase.execute(request.body);
    } catch {
      return response.status(400).json({ error: "Email already exists" });
    }
    return response.status(201).json(user);
  }
}

export { CreateUserController };
