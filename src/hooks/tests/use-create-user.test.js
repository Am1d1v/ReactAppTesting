import { renderHook, act } from "@testing-library/react"; 
import { useCreateUser } from "../use-create-user";

describe('use-create-user custom hook', () => {

    it('Should return an object with correct properties', () => {
        const {result} =  renderHook(useCreateUser);

        expect(result.current).toHaveProperty('errorMessage');
        expect(result.current).toHaveProperty('onError');
        expect(result.current).toHaveProperty('onSubmit');
        expect(result.current).toHaveProperty('onSuccess');
        expect(result.current).toHaveProperty('successMessage');

        expect(typeof result.current.errorMessage).toBe('string');
        expect(typeof result.current.onError).toBe('function');
        expect(typeof result.current.onSubmit).toBe('function');
        expect(typeof result.current.onSuccess).toBe('function');
        expect(typeof result.current.successMessage).toBe('string');
    });

    it('Should set success message', () => {
        const {result} =  renderHook(useCreateUser);

        // Check that initial state of success message is empty string
        expect(result.current.successMessage).toBe('');

        act(() => {
            result.current.onSuccess({name: 'Dima', password: '123'});
        })

        expect(result.current.successMessage).toBe('User Dima created with password 123');
    });

});