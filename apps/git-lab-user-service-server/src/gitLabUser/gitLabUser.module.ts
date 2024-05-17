import { Module } from "@nestjs/common";
import { GitLabUserModuleBase } from "./base/gitLabUser.module.base";
import { GitLabUserService } from "./gitLabUser.service";
import { GitLabUserController } from "./gitLabUser.controller";
import { GitLabUserResolver } from "./gitLabUser.resolver";

@Module({
  imports: [GitLabUserModuleBase],
  controllers: [GitLabUserController],
  providers: [GitLabUserService, GitLabUserResolver],
  exports: [GitLabUserService],
})
export class GitLabUserModule {}
