import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure(
  // Do something with the componentName
  (MuiClass) => MuiClass.replace('item-generate','Mui-selected'),
);



