const Button = ({ label, onClick }: any) => {
  return (
    <button
      className="p-1 rounded-lg outline-none text-white bg-blue-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
