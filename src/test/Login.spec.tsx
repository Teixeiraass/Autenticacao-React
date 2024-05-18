import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { AuthProvider } from '../context/AuthProvider';
import LoginPage from '../page/Login';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage testes', () => {
    it('renders email and password fields', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        )

        expect(screen.getByPlaceholderText("@gmail.com")).toBeInTheDocument
        expect(screen.getByPlaceholderText("**********")).toBeInTheDocument
    });

    it('updates email state on input change', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );

        const emailInput = screen.getByPlaceholderText('@gmail.com') as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        expect(emailInput.value).toBe("test@example.com")
    });

    it('updates password state on input change', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );

        const passwordInput = screen.getByPlaceholderText('**********') as HTMLInputElement;
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        expect(passwordInput.value).toBe("password")
    });

    it('verify if error message is rendering', () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );

        const emailInput = screen.getByPlaceholderText('**********') as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText('**********') as HTMLInputElement;
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(emailInput, { target: { value: '1234@email.com' } });
        waitFor(() => {
            expect(screen.getByText("Usuário e/ou senha incorreto(s)")).toBeInTheDocument()
        })
    });

    it('submits login on button click', () => {
        const handleLogin = jest.fn();
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );

        const LoginButton = screen.getByRole('button', { name: 'Sing in' })
        fireEvent.click(LoginButton);
        waitFor(() => {
            expect(handleLogin).toHaveBeenCalledTimes(1)
        })
    });

    it('redirects to home page after successful login', async () => {
        render(
            <MemoryRouter>
                <AuthProvider>
                    <LoginPage />
                </AuthProvider>
            </MemoryRouter>
        );

        const navigateMock = jest.fn();
        jest.mock('react-router-dom', () => ({
            useNavigate: () => navigateMock,
        }));



        const emailInput = screen.getByPlaceholderText('@gmail.com');
        const passwordInput = screen.getByPlaceholderText('**********');
        const LoginButton = screen.getByRole('button', { name: 'Sing in' })

        fireEvent.change(emailInput, { target: { value: 'cliente@youdrive.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(LoginButton);

        waitFor(() => {
            expect(navigateMock).toHaveBeenCalledWith('/');
        })

    });
})