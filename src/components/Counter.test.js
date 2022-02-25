import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

beforeEach(() => {
    render(<Counter />)
})

/* 
    Things That we are gonna test = 
    1 -) İs The Default Counter Value 0 ?
    2 -) İs The İncrement Button increase (counter + 1) ?
    3 -) İs The Decrement Button subtract (counter - 1) ?
*/

/* 1 -) */
test('Testing Counter default İnput Value (expect = 0)', () => {
    const counterValueElement = screen.getByTestId("counter");

    expect(counterValueElement).toHaveTextContent(0);

})



/* 2 -) */
test('Testing Counter.js increaseBtn', () => {
    const counterValueElement = screen.getByTestId("counter");

    const incrementBtn = screen.getByRole("button",{
        name : /incrementBtn/i,
    });

    expect(incrementBtn).toBeInTheDocument();
    
    /* Fake click by userEvent for the test (increment) */
    userEvent.click(incrementBtn); // First time click (counter = 1)
    //userEvent.click(incrementBtn); // Second time click (counter = 2)

    expect(counterValueElement).toHaveTextContent(1);

})

/* 3 -) */
test('Testing Counter.js subtractBtn', () => {
    const counterValueElement = screen.getByTestId("counter");

    const decrementBtn = screen.getByRole("button",{
        name : /decrementBtn/i,
    });
    
    expect(decrementBtn).toBeInTheDocument();


    /* Fake click by userEvent for the test (decrement) */ 

    userEvent.click(decrementBtn); // First time click (counter = -1)
    userEvent.click(decrementBtn); // Second time click (counter = -2)

    expect(counterValueElement).toHaveTextContent(-2);

})

