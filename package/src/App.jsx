


import { ThemeProvider } from '@mui/material';
import { baseTheme } from "./assets/global/Theme-variable";
import { RouterProvider } from 'react-router';
import router from "./routes/Router";

function App() {

  const theme = baseTheme;

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App