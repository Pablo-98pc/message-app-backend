function checkData (result){
    if (result) {
            return [200,result]; 
        }   
/*     if (JSON.stringify(result)!=='{}') {
        return [200,result]; 
    } */
    else {
        return [404,"File not found"];
    }
}
module.exports = checkData