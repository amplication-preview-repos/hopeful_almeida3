import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GitLabUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="avatar_url" source="avatarUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="full_name" source="fullName" />
        <TextField label="gitlabId" source="gitlabId" />
        <TextField label="glId" source="glId" />
        <TextField label="glUser_avatarUrl" source="glUserAvatarUrl" />
        <TextField label="glUser_createdAt" source="glUserCreatedAt" />
        <TextField label="glUser_email" source="glUserEmail" />
        <TextField label="glUser_fullName" source="glUserFullName" />
        <TextField label="glUser_Id" source="glUserId" />
        <TextField label="glUser_state" source="glUserState" />
        <TextField label="glUser_username" source="glUserUsername" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_email" source="userEmail" />
        <TextField label="username" source="username" />
        <TextField label="user_name" source="userName" />
      </SimpleShowLayout>
    </Show>
  );
};
