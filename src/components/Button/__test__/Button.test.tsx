import { fireEvent, render } from '@testing-library/react';
import Button from '..';

describe('Button component', () => {
  const title: string = 'TheTitle';
  const printout: string = 'Hello World!';
  const handleClick = () => console.log(printout);
  let button: HTMLElement;

  beforeEach(() => {
    const { getByTestId } = render(<Button title={title} onClick={handleClick} />);
    button = getByTestId(`btn-${title}`);
  });

  it('should render a button', () => {
    expect(button).toBeTruthy();
  });
  
  it('should render a button with the title', () => {
    expect(button.textContent).toBe(title);
  });

  it('should render a button enabled by default', () => {
    expect(button).toBeEnabled();
  });

  it('should render a button disabled with an attribute of "disabled"', () => {
    const label = 'TheLabel'
    const { getByTestId } = render(<Button title={label} disabled={true} onClick={handleClick} />);
    const buttonDisabled: HTMLElement = getByTestId(`btn-${label}`);
    expect(buttonDisabled).toBeDisabled();
  });

  it('should execute the event handler if clicked', () => {
    console.log = jest.fn();
    fireEvent.click(button);
    expect(console.log).toHaveBeenCalledWith(printout);
  });
});
