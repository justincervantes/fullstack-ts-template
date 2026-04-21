import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="mx-auto w-[min(1320px,calc(100%-1rem))] pt-3 pb-8 sm:w-[min(1320px,calc(100%-2rem))] sm:pt-5">
      <header className="border-sand-300 mb-4 border-b pb-3 sm:mb-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-sand-900 text-lg font-semibold tracking-tight sm:text-xl">
              Sample Application Sandbox
            </h1>
            <p className="text-sand-700 mt-1 text-sm">
              Minimal React workspace with <code>react-router-dom</code>,{" "}
              <code>axios</code>, and live backend data.
            </p>
          </div>

          <nav className="flex flex-wrap gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sand-900 text-white"
                    : "text-sand-700 hover:bg-sand-100",
                ].join(" ")
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/new-route"
              className={({ isActive }) =>
                [
                  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sand-900 text-white"
                    : "text-sand-700 hover:bg-sand-100",
                ].join(" ")
              }
            >
              Sandbox Route
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="grid gap-4">
        <Outlet />
      </main>
    </div>
  );
}

export { AppLayout };
