// import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs"

// const uploadOnCloudinary = async(filePath)=>{
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key:process.env.CLOUDINARY_API_KEY , 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
//     });
//     try {
//        if(!filePath){
//         return null
//        } 
//        const uploadResult = await cloudinary.uploader.upload(filePath,{resource_type:'auto'})
//        fs.unlinkSync(filePath)
//        return uploadResult.secure_url
//     } catch (error) {
//         fs.unlinkSync(filePath)
//         console.log(error);
        
//     }
// }
// export default uploadOnCloudinary





// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (filePath) => {
//     try {

//         if (!filePath) {
//             return null;
//         }

//         console.log("Uploading:", filePath);

//         const uploadResult = await cloudinary.uploader.upload(filePath, {
//             resource_type: "auto",
//         });

//         console.log("Upload Success:", uploadResult.secure_url);

//         if (fs.existsSync(filePath)) {
//             fs.unlinkSync(filePath);
//         }

//         return uploadResult.secure_url;

//     } catch (error) {

//         console.log("Cloudinary Upload Error:");
//         console.dir(error, { depth: null });

//         if (filePath && fs.existsSync(filePath)) {
//             fs.unlinkSync(filePath);
//         }

//         throw error;
//     }
// };

// export default uploadOnCloudinary;



// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// const uploadOnCloudinary = async (filePath) => {
//   try {
//     console.log("File:", filePath);

//     const result = await cloudinary.uploader.upload(filePath, {
//       resource_type: "image",
//     });

//     console.log("SUCCESS");
//     console.dir(result, { depth: null });

//     return result.secure_url;
//   } catch (err) {
//     console.log("========== CLOUDINARY ERROR ==========");
//     console.dir(err, { depth: null });

//     console.log("message:", err.message);
//     console.log("http_code:", err.http_code);
//     console.log("error:", err.error);
//     console.log("name:", err.name);

//     throw err;
//   } finally {
//     if (filePath && fs.existsSync(filePath)) {
//       fs.unlinkSync(filePath);
//     }
//   }
// };

// export default uploadOnCloudinary;



import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
    try {

        if (!filePath) {
            return null;
        }

        console.log("File:", filePath);

        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        });

        console.log("Upload Success:", result.secure_url);

        return result.secure_url;

    } catch (err) {

        console.log("========== CLOUDINARY ERROR ==========");
        console.dir(err, { depth: null });

        throw err;

    } finally {

        if (filePath && fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

export default uploadOnCloudinary;