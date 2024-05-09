import { fireEvent, render, waitFor } from "@testing-library/react";
import { Form } from "./Form";


describe('User Form test', () => {

    it('Should render Form with children', () => {
        const {container, getByTestId} = render(<Form>
            <div data-testid="form-id">

            </div>
        </Form>)

        expect(getByTestId('form-id')).toBeInTheDocument();
        expect(container.querySelector('form')).toBeInTheDocument();
    });

    it('Should invoke the onSubmit callback', () => {
        const onSubmit = jest.fn();

        const {container} = render(<Form onSubmit={onSubmit}/>);
        const formHolder = container.querySelector('form');

        fireEvent.submit(formHolder);

        // Check that onSubmit have been called
        expect(onSubmit).toHaveBeenCalled();

        // Check that onSubmit have been called 1 time
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it('Should invoke the onSuccess callback', async () => {
        const onSuccess = jest.fn();
        const {container} = render(<Form onSubmit={jest.fn()} onSuccess={onSuccess}/>);
        const formHolder = container.querySelector('form');

        fireEvent.submit(formHolder);

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalled();
        });
    });

    it('Should invoke the onError callback', async() => {
        const onError = jest.fn();
        const {container} = render(<Form onSubmit={() => Promise.reject()} onError={onError}/>);
        const formHolder = container.querySelector('form');

        fireEvent.submit(formHolder);

        await waitFor(() => {
            expect(onError).toHaveBeenCalled();
        });
    });

});