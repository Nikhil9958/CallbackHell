function saveToDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}

saveToDb("Apna College",()=>{
    console.log("Success1:","Data was saved");
    saveToDb("HTML Learnt",()=>{
        console.log("Success2: Data was saved");
        saveToDb("CSS Learnt",()=>{
            console.log("Success3: Data was saved");
        },()=>{
            console.log("Failure3: Error Occured");
        })
    },()=>{
        console.log("Failure2: Error Occured");
    })
},()=>{
    console.log("Failure1: Error Occured");
})