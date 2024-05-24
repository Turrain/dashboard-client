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
  DateField,
  DateInput,
  ReferenceArrayField,
  FunctionField,
  useRecordContext,
 
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import {App2} from "../public/module-component.es"
import { useState } from "react";

import { CSSBuilder } from 'react-css-nocode-editor';
import { Box, Stack, Button } from '@mui/material';
import { useController } from 'react-hook-form';

function parseCSSStringToJSON(cssString) {
    // Remove curly braces and trim the string
    cssString = cssString.replace(/[{}]/g, '').trim();

    // Split the string by semicolons to get individual declarations
    const declarations = cssString.split(';').filter(Boolean);

    // Helper function to convert CSS property names to camelCase
    function toCamelCase(str) {
        return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
    }

    // Initialize an empty object to hold the JSON
    const json = {};

    // Loop through each declaration
    declarations.forEach(declaration => {
        // Split by the first colon to separate the property name and value
        const [property, value] = declaration.split(/:(.*)/).map(part => part.trim());
        
        // Convert the property name to camelCase and add it to the JSON object
        json[toCamelCase(property)] = value;
    });

    return json;
}

const MyField = ({ source }: { source: string }) => {
  
    const input1 = useController({ name: 'styles', defaultValue: '' });
    
    const [input, setInput] = useState('');
    const [styles, setStyles] = useState({})
    const styleString = `
background-color: var(--primary);
opacity: 0.5;
color: #ffffff;
padding-top: 40px;
text-align: center;

border-radius: 50%;
box-sizing: border-box;
`
    const [cardStyle, setCardStyle]  = useState(styleString);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    try {
        console.log(`{"card" : {${cardStyle}}}`)
        const json = {card: parseCSSStringToJSON(cardStyle)}
        console.log(input1)
        setStyles(json)
        input1.field.onChange(JSON.stringify(json))
    } catch (error) {
      alert('Invalid JSON');
      console.error(error)
    }
  };
  return (
    <div>
       <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width:'400px'}}>
        <CSSBuilder style={cardStyle} onChange={setCardStyle} />
        <Button sx={{width:'100%', mt:1}} onClick={(e)=>handleSubmit(e)}>Apply Styles</Button>
        </div>
        <input type="hidden" {...input1.field}/>
       <App2 curstomStyles={styles}></App2>
       </div>
      
    
     
    </div>
  );

    
};


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
      <ReferenceManyField
        label="Subscriptions"
        reference="subscriptions"
        target="userId"
      >
        <SingleFieldList>
          <DateField source="dateFrom" />
          - 
          <DateField source="dateTo" />
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
      <DateField source="dateFrom" />
      <DateField source="dateTo" />
      <TextField source="domain" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <FunctionField 
                label="Modules"
                render={record => `${record.modules.map(e => e.name).join(',')}`}
            />
      <EditButton />
    </Datagrid>
  </List>
);

export const SubscriptionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateInput source="dateFrom" />
      <DateInput source="dateTo" />
      <TextInput source="domain" />
      <ReferenceInput label="User" source="userId" reference="users">
        <AutocompleteInput optionText="username" />
      </ReferenceInput>
      <ReferenceInput
        label="Modules"
        source="modules"
        reference="modules"
        allowEmpty
      >
        <SelectArrayInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const SubscriptionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="dateFrom" />
      <DateInput source="dateTo" />
      <TextInput source="domain" />
      <ReferenceInput label="User" source="userId" reference="users">
        <AutocompleteInput optionText="username" />
      </ReferenceInput>
      <ReferenceInput
        label="Modules"
        source="modules"
        reference="modules"
        allowEmpty
      >
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
    
      <Stack direction='row' gap={1}>
      <TextInput disabled source="id" />
      <TextInput source="name" />
    
      <TextInput source="script" />
      </Stack>
   
      <ReferenceManyField
        label="Subscriptions"
        reference="subscriptions"
        target="moduleId"
      >
         <SingleFieldList>
          <DateField source="dateFrom" />
          - 
          <DateField source="dateTo" />
        </SingleFieldList>
      </ReferenceManyField>
      <MyField source="styles"/>
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
    <MyField source=""/>
  </Create>
);

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name="subscriptions"
      list={SubscriptionList}
      edit={SubscriptionEdit}
      create={SubscriptionCreate}
    />
    <Resource
      name="modules"
      list={ModuleList}
      edit={ModuleEdit}
      create={ModuleCreate}
    />
  </Admin>
);
