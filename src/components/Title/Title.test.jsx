import {render, screen} from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {

    it('Should render title with children', () => {
        const text = 'Hello';

        render(<Title>{text}</Title>)

        expect(screen.getByText(text));
    });

    it.todo('Should render title with the correct tag');

    it.todo('Should render title with the correct className');


});