import { Routes, Route } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Home from "./pages/Home/Home"
import AllExpenses from "./pages/AllExpenses/AllExpenses"
import RecentActivity from "./pages/RecentActivity/RecentActivity"
import Dashboard from "./pages/Dashboard/Dashboard"
import ForgotPass from "./pages/ForgotPass"
import ProtectedRoute from "./components/ProtectedRoute"
import { Navigate } from "react-router-dom"
import Group from "./pages/Group/Group"
import Group_New from "./pages/Group-New/Group_New"

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpass" element={<ForgotPass />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/group" element={<Group />} />
      <Route path="/group-new" element={<Group_New/>} />
        <Route path="/allexpenses" element={<AllExpenses />} />
        <Route path="/recentactivity" element={<RecentActivity />} />
      </Route>
      <Route
        path="*"
        element={
          <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
        }
      />
    </Routes>
  )
}

export default App
