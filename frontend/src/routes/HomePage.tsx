import { useEffect, useState } from "react";

import { api, type HealthResponse, type User } from "../lib/api/index.ts";

function HomePage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [healthLoading, setHealthLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);
  const [healthError, setHealthError] = useState<string | null>(null);
  const [usersError, setUsersError] = useState<string | null>(null);

  async function getHealth() {
    setHealthLoading(true);
    setHealthError(null);
    try {
      const healthData = await api.getHealth();
      setHealth(healthData);
      setHealthError(null);
    } catch (requestError) {
      setHealthError(
        requestError instanceof Error
          ? requestError.message
          : "Unknown request error",
      );
    } finally {
      setHealthLoading(false);
    }
  }

  async function getUsers() {
    setUsersLoading(true);
    setUsersError(null);
    try {
      const usersData = await api.getUsers();
      setUsers(usersData);
      setUsersError(null);
    } catch (requestError) {
      setUsersError(
        requestError instanceof Error
          ? requestError.message
          : "Unknown request error",
      );
    } finally {
      setUsersLoading(false);
    }
  }

  useEffect(() => {
    async function loadInitialData() {
      const [healthResult, usersResult] = await Promise.allSettled([
        api.getHealth(),
        api.getUsers(),
      ]);

      if (healthResult.status === "fulfilled") {
        setHealth(healthResult.value);
        setHealthError(null);
      } else {
        setHealthError(
          healthResult.reason instanceof Error
            ? healthResult.reason.message
            : "Unknown request error",
        );
      }

      if (usersResult.status === "fulfilled") {
        setUsers(usersResult.value);
        setUsersError(null);
      } else {
        setUsersError(
          usersResult.reason instanceof Error
            ? usersResult.reason.message
            : "Unknown request error",
        );
      }

      setHealthLoading(false);
      setUsersLoading(false);
    }

    loadInitialData();
  }, []);

  return (
    <div className="grid gap-4">
      <section className="border-sand-300 shadow-card rounded-3xl border bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sand-700 text-xs font-semibold tracking-[0.14em] uppercase">
              Health
            </p>
            <h2 className="text-sand-900 mt-1 text-sm font-semibold">
              <span className="text-sand-900 font-medium">
                {healthError
                  ? "Issue"
                  : healthLoading
                    ? "Checking..."
                    : health?.ok
                      ? "Healthy"
                      : "Down"}
                {" - "}
                {healthError
                  ? healthError
                  : health?.dbTime
                    ? `DB time: ${health.dbTime}`
                    : "Waiting for response"}
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-sand-700 text-sm">
              Loaded from <code>GET /health</code>
            </p>
            <button
              className="border-sand-300 text-sand-700 hover:bg-sand-100 disabled:text-sand-700/50 inline-flex cursor-pointer items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:hover:bg-white"
              disabled={healthLoading}
              onClick={getHealth}
            >
              Refresh health
            </button>
          </div>
        </div>
      </section>

      <section className="border-sand-300 shadow-card rounded-3xl border bg-white">
        <div className="border-sand-300 flex flex-col gap-3 border-b px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sand-700 text-xs font-semibold tracking-[0.14em] uppercase">
              Users
            </p>
            <h3 className="text-sand-900 mt-1 text-lg font-semibold">
              Current seed data
            </h3>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-sand-700 text-sm">
              Loaded from <code>GET /users</code>
            </p>
            <button
              className="border-sand-300 text-sand-700 hover:bg-sand-100 disabled:text-sand-700/50 inline-flex cursor-pointer items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:hover:bg-white"
              disabled={usersLoading}
              onClick={getUsers}
            >
              Refresh users
            </button>
          </div>
        </div>

        {usersLoading ? (
          <p className="text-sand-700 px-6 py-5 text-sm">Loading users...</p>
        ) : null}
        {usersError ? (
          <p className="text-rust-700 px-6 py-5 text-sm">{usersError}</p>
        ) : null}

        {!usersLoading && !usersError ? (
          <div className="overflow-x-auto px-2 pb-2">
            <table className="w-full min-w-170 border-collapse">
              <thead>
                <tr>
                  <th className="text-sand-700 px-4 py-3 text-left text-xs font-semibold tracking-[0.14em] uppercase">
                    ID
                  </th>
                  <th className="text-sand-700 px-4 py-3 text-left text-xs font-semibold tracking-[0.14em] uppercase">
                    Name
                  </th>
                  <th className="text-sand-700 px-4 py-3 text-left text-xs font-semibold tracking-[0.14em] uppercase">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-sand-300 border-t">
                    <td className="text-sand-700 px-4 py-4">{user.id}</td>
                    <td className="text-sand-900 px-4 py-4 font-medium">
                      {user.name}
                    </td>
                    <td className="text-sand-700 px-4 py-4">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export { HomePage };
