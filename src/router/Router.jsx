import { createBrowserRouter } from "react-router";
import Root from "../mainLayout/Root";
import Home from "../components/homepages/Home";
import TimeLine from "../components/timeline/TimeLine";
import FriendsDetails from "../components/page/friendsDetails/FriendsDetails";
import Stats from "../components/page/stats/Stats";
import ErrorPage from "../components/page/ErrorPage";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'timeline',
                Component:TimeLine
            },
            {
                path:'/:id',
                Component:FriendsDetails
            },{
                path:'stats',
                Component:Stats
            }
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
])