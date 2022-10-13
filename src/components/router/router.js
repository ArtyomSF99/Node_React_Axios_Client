import FriendList from "../Posts"
import Home from "../Home"
import Login from "../Login"
import Registration from "../Registration"
import Users from "../Users"
import Comments from "../Comments"


export const privateRoutes = [
    {path: '/', component: <Home/>, exact: true},
    {path: '/home', component: <Home/>, exact: true},
    {path: '/users', component: <Users/>, exact: true},
    {path: '/posts', component: <FriendList/>, exact: true},
    {path: '/comment/:id', component: <Comments/>, exact: true},
    {path: '*',  component: <Home/>, exact: true},
]

export const publicRoutes = [
    {path:'/login', component: <Login/>, exact: true},
    {path: '/registration', component: <Registration/>, exact: true},
   
    
]