import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GitLabUserWhereInput = {
  avatarUrl?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  gitlabId?: IntNullableFilter;
  glId?: IntNullableFilter;
  glUserAvatarUrl?: StringNullableFilter;
  glUserCreatedAt?: DateTimeNullableFilter;
  glUserEmail?: StringNullableFilter;
  glUserFullName?: StringNullableFilter;
  glUserId?: IntNullableFilter;
  glUserState?: StringNullableFilter;
  glUserUsername?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  state?: StringNullableFilter;
  userEmail?: StringNullableFilter;
  username?: StringNullableFilter;
  userName?: StringNullableFilter;
};
