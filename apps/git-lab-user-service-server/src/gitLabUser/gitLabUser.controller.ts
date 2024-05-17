import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GitLabUserService } from "./gitLabUser.service";
import { GitLabUserControllerBase } from "./base/gitLabUser.controller.base";

@swagger.ApiTags("gitLabUsers")
@common.Controller("gitLabUsers")
export class GitLabUserController extends GitLabUserControllerBase {
  constructor(protected readonly service: GitLabUserService) {
    super(service);
  }
}
