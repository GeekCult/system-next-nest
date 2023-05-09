
import http from "../utils/http-common";

class UploadFilesService {
    upload(file:string, onUploadProgress: any) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      }).then(function(response){
        console.log(response);
      }).catch(function(response){
        console.log(response);
      });
    }
  
    getFiles() {
      return http.get("/files");
    }
  }
  
  export default new UploadFilesService();