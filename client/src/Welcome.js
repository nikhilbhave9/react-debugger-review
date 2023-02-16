import { useState } from 'react';

function Welcome() {
  const [greeting, setGreeting] = useState('Welcome to Bug Log');
  const [isShow, setShow] = useState(true);

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <Button label="Toggle" onClick={handleToggle} />
      <input type="text" value={greeting} onChange={handleChange} />
      {isShow ? <Message text={greeting} /> : null}
    </div>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} type="button">
      {label}
    </button>
  );
};

const Message = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Welcome;