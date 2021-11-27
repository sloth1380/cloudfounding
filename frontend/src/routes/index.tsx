import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import TopPage from '../pages/top';

export const MyRoutes: FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<TopPage />} />
        </Routes>
    );
}
