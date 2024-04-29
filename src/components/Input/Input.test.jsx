import { Input } from "./Input";
import { render, screen } from "@testing-library/react";

const testPlaceHolder = 'Test Placeholder'

describe('User Input Test', () => {

    it('Shloud render the input', () => {
        render(<Input placeholder={testPlaceHolder}/>);
        
        expect(screen.getByPlaceholderText(testPlaceHolder)).toBeInTheDocument();
    });

    it.todo('Shloud render the input with correct type');

    it.todo('Shloud render the input with correct classname');


});