import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let all;
    try {
      const req = { user_id: request.headers.user_id };
      all = this.listAllUsersUseCase.execute(req);
    } catch {
      return response
        .status(400)
        .json({ error: "It was not possible to get all users!" });
    }

    return response.json(all);
  }
}

export { ListAllUsersController };
