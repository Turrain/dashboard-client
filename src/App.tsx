import {
  Admin,
  Resource,
  Create,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme, radiantDarkTheme, SimpleForm, ReferenceInput, TextInput
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./users";
export const PostCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="username" />
        <TextInput source="password" />
        <TextInput source="email" />
        
      </SimpleForm>
    </Create>
  );

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}   theme={radiantLightTheme}
  darkTheme={radiantDarkTheme}>
    <Resource
      name="modules"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
     <Resource
      name="subscriptions"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      create={PostCreate}
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
      recordRepresentation="name"
    />

  </Admin>
);
