import { RouterProvider } from "react-router-dom";
import routers from "./router/router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-inter">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
