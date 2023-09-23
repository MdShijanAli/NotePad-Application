// eslint-disable-next-line no-unused-vars
import React from 'react';
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
                loader: ({ params }) => fetch(`https://note-pad-server.vercel.app/note/${params.id}`)
            },
            
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
           
        ]
    }
])