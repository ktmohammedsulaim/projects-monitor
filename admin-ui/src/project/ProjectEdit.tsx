import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="lead_id.id" reference="User" label="Lead">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <BooleanInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
