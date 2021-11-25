import * as React from "react";
import { FC } from "react";
import {
  BooleanInput,
  DateField,
  DeleteWithConfirmButton,
  Edit,
  EditProps,
  ReferenceInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
import { useStyles } from "../utils/useStyles";

const CustomToolbar = (props: any) => (
  <Toolbar {...props} classes={useStyles()}>
    <SaveButton />
    <DeleteWithConfirmButton />
  </Toolbar>
);

const ResourceEdit: FC<EditProps> = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <ReferenceInput source="id" reference="resources">
          <TextInput source="_id" disabled />
        </ReferenceInput>
        <TextInput source="name" />
        <BooleanInput source="isActive" />
        <br />
        <DateField source="createdAt" />
      </SimpleForm>
    </Edit>
  );
};

export default ResourceEdit;
