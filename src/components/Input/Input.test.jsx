import { Input } from "./Input";
import { render, screen } from "@testing-library/react";

const testPlaceHolder = 'Test Placeholder'

describe('User Input Test', () => {

    it('Shloud render the input', () => {
        render(<Input placeholder={testPlaceHolder} />);
        
        expect(screen.getByPlaceholderText(testPlaceHolder)).toBeInTheDocument();
    });

    it('Shloud render the input with correct type', () => {
        render(<Input placeholder={testPlaceHolder} type="checkbox" />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('Shloud render the input with correct classname', () => {
        const {container} = render(
        <Input 
          placeholder={testPlaceHolder}
          inputClassName = "inputTest"
          containerClassName = "containerTest"  
        />)

        const containerEl = container.querySelector('.formControl.containerTest')
        expect(containerEl).toBeInTheDocument();

        const element = screen.getByPlaceholderText(testPlaceHolder);
        expect(element).toHaveClass('input')
    });

    it('Should render input without a label', () => {
        render(<Input placeholder={testPlaceHolder}/>)
        expect(screen.queryByTestId('input-label')).not.toBeInTheDocument();
    });

    it('Should render the input with the correct label', () => {
        const tempLabel = 'Temporary label';

        render(<Input placeholder={testPlaceHolder} label={tempLabel} />);

        expect(screen.getByLabelText(tempLabel)).toBeInTheDocument();
    });


});