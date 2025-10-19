import MainRoutes from "./routes/MainRoutes";
import { App as AntdApp, ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <AntdApp component={false}>
        <ConfigProvider
          tag={{ className: "text-[14px] font-semibold py-1 px-2" }}
          // componentSize="large"
          theme={{
            token: {
              colorPrimary: "#7f22fe",
              colorLink: "#02cf5b",
              borderRadius: 4,
              fontFamily: "Bai Jamjuree",
            },
          }}
        >
          <QueryClientProvider client={queryClient}>
            <MainRoutes />
          </QueryClientProvider>
        </ConfigProvider>
      </AntdApp>
    </>
  );
}

export default App;
