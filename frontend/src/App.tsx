import "@aws-amplify/ui-react/styles.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import Root from "./components/Pages/Root";
import Home from "./components/Pages/Home";
import Upload from "./components/Pages/Upload";

import { Amplify } from "aws-amplify";
import config from "./amplify-config";
Amplify.configure(config);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      handle: {
        crumb: () => (
          <Link to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
        ),
      },
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "upload",
          element: <Upload />,
          handle: { crumb: () => <Link to="/upload">Upload</Link> },
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
