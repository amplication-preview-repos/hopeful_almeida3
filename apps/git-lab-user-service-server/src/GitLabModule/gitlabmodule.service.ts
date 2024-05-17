import { Injectable } from "@nestjs/common";

@Injectable()
export class GitLabModuleService {
  constructor() {}
  async FetchGitLabUsers(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
