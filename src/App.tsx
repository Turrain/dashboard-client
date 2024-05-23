import {
  Admin,
  Resource,
  Create,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Edit,
  ReferenceArrayInput,
  SelectArrayInput,
  Datagrid,
  List,
  ReferenceField,
  SelectInput,
  TextField,
  EditButton,
  ChipField,
  ReferenceManyField,
  SingleFieldList,
  AutocompleteInput,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";


export const UserList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="email" />
          <TextField source="username" />
          <EditButton />
      </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="email" />
          <TextInput source="username" />
          <ReferenceManyField label="Subscriptions" reference="subscriptions" target="userId">
              <SingleFieldList>
                  <ChipField source="term" />
              </SingleFieldList>
          </ReferenceManyField>
      </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="email" />
          <TextInput source="username" />
      </SimpleForm>
  </Create>
);


export const SubscriptionList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="term" />
          <TextField source="domain" />
          <ReferenceField label="User" source="userId" reference="users">
              <TextField source="username" />
          </ReferenceField>
          <EditButton />
      </Datagrid>
  </List>
);

export const SubscriptionEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="term" />
          <TextInput source="domain" />
          <ReferenceInput label="User" source="userId" reference="users">
              <AutocompleteInput optionText="username" />
          </ReferenceInput>
          <ReferenceInput label="Modules" source="modules" reference="modules" allowEmpty>
              <SelectArrayInput optionText="name" />
          </ReferenceInput>
      </SimpleForm>
  </Edit>
);

export const SubscriptionCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="term" />
          <TextInput source="domain" />
          <ReferenceInput label="User" source="userId" reference="users">
              <AutocompleteInput optionText="username" />
          </ReferenceInput>
          <ReferenceInput label="Modules" source="modules" reference="modules" allowEmpty>
              <SelectArrayInput optionText="name" />
          </ReferenceInput>
      </SimpleForm>
  </Create>
);

export const ModuleList = (props) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="styles" />
          <TextField source="script" />
          <EditButton />
      </Datagrid>
  </List>
);

export const ModuleEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="styles" />
          <TextInput source="script" />
          <ReferenceManyField label="Subscriptions" reference="subscriptions" target="moduleId">
              <SingleFieldList>
                  <ChipField source="term" />
              </SingleFieldList>
          </ReferenceManyField>
      </SimpleForm>
  </Edit>
);

export const ModuleCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
          <TextInput source="styles" />
          <TextInput source="script" />
      </SimpleForm>
  </Create>
);



export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
       <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="subscriptions" list={SubscriptionList} edit={SubscriptionEdit} create={SubscriptionCreate} />
        <Resource name="modules" list={ModuleList} edit={ModuleEdit} create={ModuleCreate} />
  </Admin>
);
