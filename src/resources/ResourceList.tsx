import * as React from "react";
import {
  BooleanInput,
  Datagrid,
  DateField,
  Filter,
  List,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";
import { ResourceOptions } from "../utils/SelectOptions";

const ResourceFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by name" source="q" alwaysOn />
    <SelectInput
      label="Resource Name"
      source="name"
      choices={ResourceOptions}
    />
    <BooleanInput label="Is Active" source="isActive" defaultValue="true" />
  </Filter>
);

const ResourceList = (props: any) => (
  <List
    {...props}
    filters={<ResourceFilter />}
    sort={{ field: "createdAt", order: "DESC" }}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="isActive" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);

export default ResourceList;
