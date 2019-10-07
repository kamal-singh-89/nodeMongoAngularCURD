const doWork = async () =>{    
    return "My name is rohitash."
}
doWork().then((response)=>{
    console.log("response = " + response)
}).catch((error)=>{
    console.log("error = " + error)
})