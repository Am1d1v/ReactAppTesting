import App from "./App";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";

describe('App Integrational test', () => {

    it('Should render App with form elements and a title', () => {
        const {container} = render(<App />);

        expect(screen.getByTestId('app')).toBeInTheDocument();

        const userName = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', {name: /Create user/});
        const title = container.querySelector('h1');

        expect(userName).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    it.todo('Should render error message when form was submit with a weak password', () => {
        render(<App />);    

        const userName = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', {name: /Create user/});
        const successMessage = screen.queryByText(/created with password/);
        const errorMessage = screen.queryByText(/Password must be at least 8 characters long/);

        expect(successMessage).not.toBeInTheDocument();
        expect(errorMessage).not.toBeInTheDocument();
    });

    it.todo('Should render successfull messafe after successfull submit');

});