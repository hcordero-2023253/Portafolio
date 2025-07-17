import { createBrowserRouter, RouterProvider } from 'react-router'
import { PersonalInformationPage } from '../page/PersonalInformationPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PersonalInformationPage />,
        errorElement: <div>Error loading page</div>,
        children: [
            {}
        ]
    }
])

const MyRouter = () =><RouterProvider router={router} />    
export default MyRouter