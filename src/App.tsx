import { GlobalProvider } from 'providers';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from 'routes';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <PrivateRoutes />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
