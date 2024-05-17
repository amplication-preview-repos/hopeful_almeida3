import { GitLabUserWhereInput } from "./GitLabUserWhereInput";
import { GitLabUserOrderByInput } from "./GitLabUserOrderByInput";

export type GitLabUserFindManyArgs = {
  where?: GitLabUserWhereInput;
  orderBy?: Array<GitLabUserOrderByInput>;
  skip?: number;
  take?: number;
};
