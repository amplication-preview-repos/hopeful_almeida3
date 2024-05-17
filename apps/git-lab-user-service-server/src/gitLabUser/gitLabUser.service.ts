import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitLabUserServiceBase } from "./base/gitLabUser.service.base";

@Injectable()
export class GitLabUserService extends GitLabUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
