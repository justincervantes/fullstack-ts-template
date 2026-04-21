const sandboxInstructions = [
  "// 1. Create another page in src/routes",
  "// 2. Register it in src/router.tsx",
  "// 3. Reuse src/lib/api for backend calls",
  "// 4. Build the feature in this open area",
].join("\n");

function NewRoutePage() {
  return (
    <section className="border-sand-300 shadow-card grid gap-6 rounded-3xl border border-dashed bg-white p-6">
      <div>
        <p className="text-sand-700 m-0 text-xs font-semibold tracking-[0.14em] uppercase">
          Sandbox route
        </p>
        <h2 className="text-sand-900 mt-1 text-3xl font-semibold tracking-tight">
          Large open workspace
        </h2>
      </div>

      <div className="grid flex-1 place-items-center rounded-2xl p-6">
        <p className="text-sand-900 text-sm font-medium">Ready to build</p>
        <p className="text-sand-700 mt-2 text-sm leading-6">
          Start here for forms, CRUD flows, detail views, or component
          experiments.
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl bg-slate-900 p-4 text-left text-slate-50">
          <pre className="m-0 font-mono text-sm">{sandboxInstructions}</pre>
        </div>
      </div>
    </section>
  );
}

export { NewRoutePage };
