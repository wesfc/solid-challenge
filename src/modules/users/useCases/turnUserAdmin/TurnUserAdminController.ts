import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    let user;
    try {
      const req = { user_id: request.params.user_id };
      user = this.turnUserAdminUseCase.execute(req);
    } catch {
      return response.status(404).json({ error: "User not found!" });
    }

    return response.json(user);
  }
}

export { TurnUserAdminController };
