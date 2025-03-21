import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

function App() {

    const router = createBrowserRouter(routes, {
        future: { 
            v7_relativeSplatPath: true
        }
    })

    return (
        <RouterProvider
            future={{
                v7_startTransition: true,
            }}
            router={router}
        />
    )
}

export default App