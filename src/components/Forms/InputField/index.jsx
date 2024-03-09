/* eslint-disable react/prop-types */

export default function InputField({
  label,
  name,
  register,
  type = "text",
  error,
  placeholder,
}) {
  return (
    <div className="mb-2">
      <label className="block text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        {...register(name)}
        type={type}
        className="border p-2 w-full"
        placeholder={placeholder}
      />
      <p className="text-red-500 text-sm">{error?.message?.split("type")[0]}</p>
    </div>
  );
}
