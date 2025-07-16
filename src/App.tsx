import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppStore } from '@store';
import { AppRoutes } from '@routes';

const App: React.FC = () => (
  <Provider store={AppStore}>
    <BrowserRouter>
      <div className="min-h-screen font-sans bg-gray-100 text-gray-900">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
