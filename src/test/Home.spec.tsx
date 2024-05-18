import {render, screen, waitFor } from "@testing-library/react"
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
    });
})