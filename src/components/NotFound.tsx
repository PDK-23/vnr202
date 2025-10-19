import { Button, Result } from "antd";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen text-white">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => navigate("/")}>Back Home</Button>}
      />
    </div>
  );
}
