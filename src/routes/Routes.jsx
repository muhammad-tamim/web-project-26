import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import DetailsLayout from "../layouts/DetailsLayout";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import Error from "../components/ui/Error";
import CategoryNews from "../pages/CategoryNews";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/news/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <DetailsLayout></DetailsLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <NewsDetailsPage></NewsDetailsPage>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/auth/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/auth/sign-up',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/*',
        element: <PageNotFoundPage></PageNotFoundPage>
    }
])
