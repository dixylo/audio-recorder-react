import { ButtonAttributes } from '../../types';
import './styles.css';

const Button = ({ title, disabled, onClick }: ButtonAttributes) => {
  return (
    <button
      data-testid={`btn-${title}`}
      className='button'
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
