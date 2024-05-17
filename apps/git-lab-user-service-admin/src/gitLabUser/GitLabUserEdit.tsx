import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const GitLabUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="avatar_url" source="avatarUrl" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="full_name" source="fullName" />
        <NumberInput step={1} label="gitlabId" source="gitlabId" />
        <NumberInput step={1} label="glId" source="glId" />
        <TextInput label="glUser_avatarUrl" source="glUserAvatarUrl" />
        <DateTimeInput label="glUser_createdAt" source="glUserCreatedAt" />
        <TextInput label="glUser_email" source="glUserEmail" type="email" />
        <TextInput label="glUser_fullName" source="glUserFullName" />
        <NumberInput step={1} label="glUser_Id" source="glUserId" />
        <TextInput label="glUser_state" source="glUserState" />
        <TextInput label="glUser_username" source="glUserUsername" />
        <TextInput label="name" source="name" />
        <TextInput label="state" source="state" />
        <TextInput label="user_email" source="userEmail" type="email" />
        <TextInput label="username" source="username" />
        <TextInput label="user_name" source="userName" />
      </SimpleForm>
    </Edit>
  );
};
