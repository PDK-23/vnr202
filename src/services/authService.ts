import api from "@/utils/axios";

const baseEndpoint = "authentication";

const authService = {
  login: async (formData: any) => {
    const response = await api.post(`/${baseEndpoint}/login`, formData);
    return response.data;
  },

  register: async (formData: any) => {
    const response = await api.post(`/${baseEndpoint}/register`, formData);
    return response.data;
  },
};

export default authService;
