import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";
import Tasks from "./pages/Tasks";
import Task from "./pages/Task";
import CreateTask from "./features/tasks/CreateTask";
import ResourceHub from "./pages/ResourceHub";
import ResourceGroup from "./pages/ResourceGroup";
import Projects from "./pages/Projects";
import Chats from "./pages/Chats";
import NotFound from "./pages/NotFound";
import Protect from "./pages/Protect";

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

            <Route
              path="/"
              element={
                <Protect>
                  <AppLayout />
                </Protect>
              }
            >
              <Route index element={<NotFound></NotFound>}></Route>

              <Route
                path="resources/:projectId"
                element={<ResourceHub></ResourceHub>}
              ></Route>
              <Route
                path="projects/:userId"
                element={<Projects></Projects>}
              ></Route>
              <Route
                path="resource/:groupId"
                element={<ResourceGroup></ResourceGroup>}
              ></Route>
              <Route path="chats" element={<Chats></Chats>}></Route>
              <Route
                path="create-task/:projectId"
                element={<CreateTask></CreateTask>}
              ></Route>
              <Route path="/tasks/:projectId" element={<Tasks></Tasks>}></Route>

              <Route path="/task/:taskId" element={<Task></Task>}></Route>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
