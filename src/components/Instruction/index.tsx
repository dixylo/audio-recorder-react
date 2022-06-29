import './styles.css';

const Instruction = ({ text }: { text: string; }) => {
  return (
    <p data-testid='instruction' className='instruction'>{text}</p>
  );
};

export default Instruction;
