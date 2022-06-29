import { render } from '@testing-library/react';
import Instruction from '..';

describe('Instruction component', () => {
  const text: string = 'Please click "Record" to start recording.';
  let instruction: HTMLElement;

  beforeEach(() => {
    const { getByTestId } = render(<Instruction text={text} />);
    instruction = getByTestId('instruction');
  });

  it('should render a piece of instruction', () => {
    expect(instruction).toBeTruthy();
  });
  
  it('should render the text', () => {
    expect(instruction.textContent).toBe(text);
  });
});