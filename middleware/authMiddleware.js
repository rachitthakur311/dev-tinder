const isAdminAuthorized =  (req, res, next)=>{
    console.log("admin permission check");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized reques")
    }else{
        next()
    }
}


const isUserAuthorized =  (req, res, next)=>{
    console.log("users permission check");
    const token = "123xyz";
    const isAdminAuthorized = token === "123xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized reques")
    }else{
        next()
    }
}



module.exports = {
    isAdminAuthorized,isUserAuthorized
}