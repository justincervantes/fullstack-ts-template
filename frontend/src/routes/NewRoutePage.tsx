function NewRoutePage() {
  return (
    <div className="mt-12 flex items-center justify-center">
      <form className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Sample Form</h2>
        </div>

        <div>
          <label
            htmlFor="field"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Sample Field
          </label>
          <input
            id="field"
            name="field"
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-black"
            required
            type="text"
          />
        </div>

        <button className="w-full rounded bg-black py-2 text-white hover:opacity-90">
          Form Submit
        </button>
      </form>
    </div>
  );
}

export { NewRoutePage };
