import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthProvider } from "../context/AuthProvider"
import HomePage from "../page/Home"

describe('HomePage testes', () => {
    it("get user name and user email", () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <HomePage />
                </AuthProvider>
            </MemoryRouter>
        )

        waitFor(() => {
            expect(screen.getByDisplayValue("Cliente")).toBeInTheDocument()
            expect(screen.getByDisplayValue("cliente@youdrive.com")).toBeInTheDocument()
        })
    })

    it('submits login on button click', () => {
        const handleLogout = jest.fn();
        render(
            <MemoryRouter>
                <AuthProvider>
                    <HomePage />
                </AuthProvider>
            </MemoryRouter>
        );

        waitFor(() => {
            const Logout = screen.getByRole('button', { name: 'Logout' })
            fireEvent.click(Logout);
            expect(handleLogout).toHaveBeenCalledTimes(1)
        })
    });

    it('redirects to home page after successful login', async () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <HomePage />
                </AuthProvider>
            </MemoryRouter>
        );

        const navigateMock = jest.fn();
        jest.mock('react-router-dom', () => ({
            useNavigate: () => navigateMock,
        }));
        
        waitFor(() => {
            const Logout = screen.getByRole('button', { name: 'Logout' })
            fireEvent.click(Logout);
            expect(navigateMock).toHaveBeenCalledWith('/login');
        })
    });
})