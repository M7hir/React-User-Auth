import RootLayout from '../pages/Root';
import Signin from '../pages/auth/Sign_in';
import SignUp from '../pages/auth/SignUp';
import { Navigate } from 'react-router-dom';
import DeleteAccount from '../pages/auth/DeleteAccount';
import UpdatePassword from '../components/Update_Password';
import MainPage from '../pages/auth/MainPage';

const routes = [{
  path: 'main',
  element: <MainPage />
},
{
  path: 'auth',
  element: <RootLayout />,
  children: [
    {
      index: true, element: <Navigate to='login' />,
    },
    {
      path: 'login',
      element: <Signin />
    },
    {
      path: 'sign_up',
      element: <SignUp />
    },
    {
      path: 'delete_account',
      element: <DeleteAccount />
    },
    {
      path: 'update_password',
      element: <UpdatePassword />
    },
  ]
}]

export default routes