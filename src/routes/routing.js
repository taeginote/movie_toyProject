import { createBrowserRouter } from 'react-router-dom';
import IndexHeader from '../components';
import HomePage from '../pages/components/List/Home/home';
import UpComing from '../pages/components/List/upComing/upComing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexHeader />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/upComing',
				element: <UpComing />,
			},
		],
	},
]);

export default router;
