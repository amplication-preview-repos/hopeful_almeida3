import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GitLabModuleService } from "./gitlabmodule.service";

@swagger.ApiTags("gitLabModules")
@common.Controller("gitLabModules")
export class GitLabModuleController {
  constructor(protected readonly service: GitLabModuleService) {}

  @common.Get("/fetch-gitlab-users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchGitLabUsers(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchGitLabUsers(body);
      }
}
