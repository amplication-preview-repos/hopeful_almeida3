import { GitLabUser as TGitLabUser } from "../api/gitLabUser/GitLabUser";

export const GITLABUSER_TITLE_FIELD = "fullName";

export const GitLabUserTitle = (record: TGitLabUser): string => {
  return record.fullName?.toString() || String(record.id);
};
