import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="lead_id.id" reference="User" label="Lead">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <BooleanInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
