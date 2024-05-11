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

    it.todo('Should render error message when form was submit with a weak password');

    it.todo('Should render successfull messafe after successfull submit');

});