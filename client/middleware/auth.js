import axios from "axios";

export default async function(context){
    try {
        const accesstoken = localStorage.getItem("accesstoken");
        
        const res = await axios({
          url: `http://localhost:9000/token/checkAccess`,
          headers: {
            Authorization: `Bearer ` + accesstoken,
          },
          method: "GET",
          credentials: "include",
        });
      } catch (e) {
        try{
            const refreshToken = localStorage.getItem("refreshtoken");
            const res = await axios({
              url: `http://localhost:9000/token/refresh`,
              headers: {
                Authorization: `Bearer ` + refreshToken,
              },
              method: "GET",
              credentials: "include",
            })
            
            localStorage.setItem("accesstoken", res.data.accesstoken);
            localStorage.setItem("refreshtoken", res.data.refreshToken);
          }
  
        catch(e){
          context.redirect('/')
        }
      }
}