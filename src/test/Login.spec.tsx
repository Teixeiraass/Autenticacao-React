import { screen, render, fireEvent } from '@testing-library/react'
import { AuthProvider } from '../context/AuthProvider';
import LoginPage from '../page/Login';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage', () => {
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
})