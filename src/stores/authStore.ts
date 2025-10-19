import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { setCookie } from "../utils/cookie";

const useAuthStore = create<{
  isAuthenticated: boolean;
  accountId: number;
  email: string;
  username: string;
  fullname: string;
  role: string;
  login: (token: string) => void;
  logout: () => void;
  updateAccount: (data: any) => void;
}>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      accountId: 0,
      email: "",
      username: "",
      fullname: "",
      role: "",
      login: (token: string) => {
        if (typeof token !== "string") {
          console.error("Invalid token:", token);
          return;
        }

        try {
          // Giải mã token để lấy thông tin người dùng
          const decoded: any = jwtDecode(token);

          if (decoded?.email) {
            console.log("Email:", decoded.email);
          } else {
            console.error("Email1 not found in token payload");
          }

          // Lưu token vào cookie
          setCookie("accessToken", token, 7); // Token sẽ hết hạn sau 7 ngày
          console.log("Token:", decoded);

          set({
            isAuthenticated: true,
            accountId: decoded?.accountId || 0,
            email: decoded?.email,
            username: decoded?.username,
            fullname: decoded?.fullname || "",
            role: decoded?.role || "",
          });
        } catch (error) {
          console.error("Failed to decode token:", error);
        }
      },

      logout: () => {
        setCookie("accessToken", "", 0);
        set({
          isAuthenticated: false,
          accountId: 0,
          email: "",
          username: "",
          fullname: "",
          role: "guest",
        });
      },
      updateAccount: (data: any) => {
        set({
          username: "",
          fullname: data.name,
        });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
