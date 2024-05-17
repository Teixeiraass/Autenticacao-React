import { render } from '@testing-library/react'
import LoginPage from './Login';

describe('render login', () => {
    it('Input validate', () => {
        const { getByPlaceholderText } = render(
            <LoginPage />
        );

        const emailInput = getByPlaceholderText("@gmail.com");
        const password = getByPlaceholderText("**********");

        expect(emailInput).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })

})