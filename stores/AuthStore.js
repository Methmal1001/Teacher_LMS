import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: "",
    loggedUser: "",
    redirectTo: "",
    
  }),

  persist: true,

  actions: {
    async login(req,showLoading){
        console.log("login:",req);
        const { $showToast } = useNuxtApp()
        const loadingAlert = showLoading(''); 

        try{
            const response = await axios.post('/Auth/login',req);
            console.log("login-response:",response);

            loadingAlert.close();      

            if (response.data.isSuccess) {
                this.token = response.data.authToken;  // Assuming the response contains a 'token'  
                this.loggedUser =response.data.loggedUser;
                localStorage.setItem("authToken", response.data.token);

                $showToast(response.data.message);
            } else {        
            $showToast(`Change Password Error: ${response.data.message}`, 'error');
            }
        }
        catch(error){
            console.error("error:",error);
        }
    }
  },
});