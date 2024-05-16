import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectRoute from "./routes/ProtectedRoute";
import HomePage from "./page/Home";
import LoginPage from "./page/Login";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<ProtectRoute><HomePage /></ProtectRoute>} />
                    <Route path="/login" element={<ProtectRoute><LoginPage /></ProtectRoute>} />
                </Routes>
            </AuthProvider>

        </BrowserRouter>

    )
}

export default App;