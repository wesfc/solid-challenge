import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    let user;
    try {
      const req = { user_id: request.params.user_id };
      user = this.showUserProfileUseCase.execute(req);
    } catch {
      return response.status(404).json({ error: `User not found!` });
    }

    return response.json(user);
  }
}

export { ShowUserProfileController };
