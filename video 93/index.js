import fsn from "fs"
import fs from "fs/promises"
import path from "path"
const basepath="C:\\Users\\JOEL\\OneDrive\\Desktop\\web dev course by code with harry\\video 93"
let files=await fs.readdir(basepath)
for (const file of files) {
    console.log("running for file:",file)
    let ext=file.split(".")[file.split(".").length-1]
    if(ext!="js"&&ext!="json"&&file.split(".").length>1){
        if(fsn.existsSync(path.join(basepath,ext))){
            fs.rename(path.join(basepath,file),path.join(basepath,ext,file))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath,file),path.join(basepath,ext,file))
        }
    }
}
