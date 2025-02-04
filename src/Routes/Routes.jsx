import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "../Components/ProtectedRoute"
import CreateWorkspaceScreen from "../screens/CreateWorkspaceScreen"
import ErrorScreen from "../screens/ErrorScreen"
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen"
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import ResetPasswordScreen from "../screens/ResetPasswordScreen"
import WorkspaceScreen from "../screens/WorkspaceScreen"


const RunPages = () => {
    return(
        <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/error' element={<ErrorScreen/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordScreen/>}/>
        <Route path='/reset-password' element={<ResetPasswordScreen/>} />
        <Route element={<ProtectedRoute/>} >
            <Route path='/home' element={<HomeScreen/>}/>
            <Route path='/workspace/new' element={<CreateWorkspaceScreen/>}/>
            <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
            <Route path='/workspace/:workspace_id/:channel_id' element={<WorkspaceScreen/>}/>
        </Route>
        
        </Routes>
    )
}

export default RunPages