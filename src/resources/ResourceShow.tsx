import {
  BooleanField,
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const ResourceShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField source="id" reference="resources">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="name" />
      <BooleanField source="isActive" />
      <DateField source="createdAt" />
    </SimpleShowLayout>
  </Show>
);

export default ResourceShow;
