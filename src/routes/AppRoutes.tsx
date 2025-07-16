import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Search} from '@pages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};
