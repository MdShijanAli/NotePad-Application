import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ResetPass from "../Login/ResetPassword/ResetPass";
import ErrorPage from "../components/ErrorPage";
import Register from "../Login/ResetPassword/Register";
import Login from "../Login/ResetPassword/Login";

import Home from "../Pages/Home/Home";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";
import AddNote from "../Pages/AddNote/AddNote";
import AllNotes from '../Pages/Dashboard/AllNotes';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-note',
                element: <AddNote />
            },
            {
                path: '/all-notes',
                element: <AllNotes />
            },
            /* {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-server-phi.vercel.app/services')

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-phi.vercel.app/services/${params.id}`)
            }, */

            
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
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
                element: <ResetPass />
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