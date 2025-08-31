// src/components/InputField.jsx
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  textarea = false,
  rows = 4,
}) => {
  const baseStyles =
    "mt-3 w-full rounded-lg bg-primary px-3 py-2 text-secondary " +
    "placeholder:opacity-60 placeholder:text-tertiary " +
    "focus:outline-none focus:ring-2 focus:ring-secondary focus:scale-105 transition-transform duration-500 transform-gpu will-change-transform";

  return (
    <label className="block mt-4">
      {label && <span className="block text-lg text-secondary">{label}</span>}

      {textarea ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={baseStyles}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={baseStyles}
        />
      )}
    </label>
  );
};

export default InputField;
