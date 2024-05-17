import * as graphql from "@nestjs/graphql";
import { GitLabModuleService } from "./gitlabmodule.service";

export class GitLabModuleResolver {
  constructor(protected readonly service: GitLabModuleService) {}

  @graphql.Mutation(() => String)
  async FetchGitLabUsers(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchGitLabUsers(args);
  }
}
