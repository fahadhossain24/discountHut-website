/* eslint-disable react/prop-types */

export default function DateTimeField({ label, name, register, error }) {
  return (
    <div className="mb-3">
      <label className="block text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        {...register(name)}
        type="datetime-local"
        className="border p-2 w-full"
      />
      <p className="text-red-500 text-sm">{error?.message?.split("type")[0]}</p>
    </div>
  );
}
