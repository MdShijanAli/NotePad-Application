import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ResetPass from "../Login/ResetPassword/ResetPass";
import ErrorPage from "../components/ErrorPage";
import Register from "../Login/ResetPassword/Register";
import Login from "../Login/ResetPassword/Login";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";
import AddNote from "../Pages/AddNote/AddNote";
import AllNotes from '../Pages/Dashboard/AllNotes';
import PriveteRoute from "./PrivetRoute/PrivetRoute";
import ProtectRoute from "./ProtectRoute/ProtectRoute";
import SingleNote from "../Pages/SingleNote/SingleNote";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PriveteRoute><AllNotes /></PriveteRoute>
            },
            {
                path: '/add-note',
                element: <PriveteRoute><AddNote /></PriveteRoute>
            },
            {
                path: '/note/:id',
                element: <SingleNote />,
                loader: ({ params }) => fetch(`http://localhost:5000/note/${params.id}`)
            },
            
            /* {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-server-phi.vercel.app/services')

            },
             */

            
            {
                path: '/login',
                element: <ProtectRoute><Login /></ProtectRoute>
            },
            {
                path: '/register',
                element: <ProtectRoute><Register /></ProtectRoute>
            },
            {
                path: '*',
                element: <ErrorPage />
            },



            {
                path: '/thank-you',
                element: <ThankYouPage />
            },

           
            {
                path: '/reset-password',
                element: <ProtectRoute><ResetPass /></ProtectRoute>
            },
           
           /*  {
                path: '/add-a-service',
                element: <PriveteRoute><AddAService></AddAService></PriveteRoute>
            },
            {
                path: '/my-services',
                element: <PriveteRoute><MyServices></MyServices></PriveteRoute>
            },
            {
                path: '/update-review/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://assignment-11-server-phi.vercel.app/reviews/${params.id}`)
            } */
        ]
    }
])