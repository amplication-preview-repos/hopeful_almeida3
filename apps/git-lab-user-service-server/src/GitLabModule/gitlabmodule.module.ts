import { Module } from "@nestjs/common";
import { GitLabModuleService } from "./gitlabmodule.service";
import { GitLabModuleController } from "./gitlabmodule.controller";
import { GitLabModuleResolver } from "./gitlabmodule.resolver";

@Module({
  controllers: [GitLabModuleController],
  providers: [GitLabModuleService, GitLabModuleResolver],
  exports: [GitLabModuleService],
})
export class GitLabModuleModule {}
