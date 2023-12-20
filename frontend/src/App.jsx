import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Tasks from "./pages/Tasks";
import Task from "./pages/Task";
import CreateTask from "./features/tasks/CreateTask";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <>
      {" "}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>

            <Route path="/" element={<AppLayout />}>
              <Route
                path="create-task"
                element={<CreateTask></CreateTask>}
              ></Route>
              <Route path="/tasks/:projectId" element={<Tasks></Tasks>}></Route>
              <Route path="/task/:taskId" element={<Task></Task>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
