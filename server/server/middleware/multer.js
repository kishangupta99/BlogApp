import multer from "multer";

// memory storage keeps file in buffer (no need for fs.readFileSync)
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
