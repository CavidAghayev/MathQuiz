import "./../Input/Input.css";
const Input = ({ size, id, type, text, onChange, value = "", onClick }) => {
  return (
    <>
      <label className="label" htmlFor={id}>
        {text}
      </label>
      <input
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={`input input--${size}`}
        type={type}
        id={id}
      />
    </>
  );
};

export default Input;
