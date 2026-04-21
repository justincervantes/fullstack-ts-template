import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./components/AppLayout.tsx";
import { HomePage } from "./routes/HomePage.tsx";
import { NewRoutePage } from "./routes/NewRoutePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "new-route",
        element: <NewRoutePage />,
      },
    ],
  },
]);

export { router };
