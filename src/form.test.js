import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Form from './form';

describe("form component", () => {
    it("valid firstName", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput1")
            const inputword = 'first'
            await fireEvent.change(input,{target: {value: inputword }})
            expect(input.value).toBe('first')
        })
    })
    it("valid lastName", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput2")
            const inputword = 'last'
            await fireEvent.change(input,{target: {value: inputword }})
            expect(input.value).toBe('last')
        })
    })
    it("valid Email", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);
            const input = getByTestId("testinput3")
            const inputword = 'first@gmail.com'
            await fireEvent.change(input,{target: {value: inputword }})
            expect(input.value).toBe('first@gmail.com')
        })
    })
    it("valid Password", async () => {
        await act(async () => {
            const { getByTestId } = render(<Form />);.0
            const input = getByTestId("testinput4")
            const inputword = '123@#$'
            await fireEvent.change(input,{target: {value: inputword }})
            expect(input.value).toBe('123@#$')
        })
    })
})