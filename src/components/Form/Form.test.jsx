import { fireEvent, render } from "@testing-library/react";
import { Form } from "./Form";


describe('User Form test', () => {

    it('Should render Form with children', () => {
        const {container, getByTestId} = render(<Form>
            <div data-testid="form-id">

            </div>
        </Form>)

        expect(getByTestId('form-id')).toBeInTheDocument();
    });

});