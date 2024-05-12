import App from "./App";
import { render, screen, fireEvent, act, waitFor, logRoles, within } from "@testing-library/react";
import * as waitMock from './helpers/wait';

const waitSpy = jest.spyOn(waitMock, 'wait');

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

    it('Should render error message when form was submit with a weak password', async () => {
        render(<App />);    

        const userNameInput = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', {name: /Create user/});
        const successMessage = screen.queryByText(/created with password/);
        const errorMessage = screen.queryByText(/Password must be at least 8 characters long/);

        expect(successMessage).not.toBeInTheDocument();
        expect(errorMessage).not.toBeInTheDocument();

        act(() => {
            fireEvent.change(userNameInput, {target: {value: 'Dima'}})
            fireEvent.change(passwordInput, {target: {value: '!Pas123'}})
            fireEvent.click(submitButton);
        })

        const errorMessageAfterSubmit = await screen.findByText(/Password must be at least 8 characters long/);
        expect(errorMessageAfterSubmit).toBeInTheDocument();
    });

    it('Should render successfull message after successfull submit', async () => {
        render(<App />);    

        const userNameInput = screen.getByLabelText(/User name/);
        const passwordInput = screen.getByLabelText(/Password/);
        const submitButton = screen.getByRole('button', {name: /Create user/});
        const successMessage = screen.queryByText(/created with password/);
        const errorMessage = screen.queryByText(/Password must be at least 8 characters long/);

        expect(successMessage).not.toBeInTheDocument();
        expect(errorMessage).not.toBeInTheDocument();

        const promise = Promise.resolve();

        waitSpy.mockImplementationOnce(() => promise);

        act(() => {
            fireEvent.change(userNameInput, {target: {value: 'Dima'}})
            fireEvent.change(passwordInput, {target: {value: 'Qwerty123!@#'}})
            fireEvent.click(submitButton);
        })

        const successMessageAfterSubmit = await screen.findByText(/created with password/);
        expect(successMessageAfterSubmit).toBeInTheDocument();
    });

    it('Should render App with form elements and a title', () => {
        render(<App />);

        const form = screen.getByRole('form');
        const userNameInput = within(form).getByLabelText(/User name/);
    })

});