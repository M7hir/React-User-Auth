import routes from "./auth"
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';


const combine_routes = [
    {path:"",element:<Navigate to="auth/login" />},
    ...routes,
    {
        path : '*', element : <div>Page not found!</div>
    }
]

const router = createBrowserRouter(combine_routes)

function Router() {
    return(    <RouterProvider router = {router} />    )
}

export default Router



