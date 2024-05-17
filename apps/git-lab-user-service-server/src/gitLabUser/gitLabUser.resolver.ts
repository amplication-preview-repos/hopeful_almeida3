import * as graphql from "@nestjs/graphql";
import { GitLabUserResolverBase } from "./base/gitLabUser.resolver.base";
import { GitLabUser } from "./base/GitLabUser";
import { GitLabUserService } from "./gitLabUser.service";

@graphql.Resolver(() => GitLabUser)
export class GitLabUserResolver extends GitLabUserResolverBase {
  constructor(protected readonly service: GitLabUserService) {
    super(service);
  }
}
