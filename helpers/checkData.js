function checkData (result){
    if (result.length > 0) {
            return [200,result]; 
        }   
    else {
        return [404,"File not found"];
    }
}
module.exports = checkData