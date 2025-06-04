function launchBrowser(){
let browserName="Edge";
    if (browserName==="Chrome"){

        console.log("Chrome browser is launched");
               
    }

    else{
        console.log("Edge Browser is Launched");
        
    }
}


function runTests() {
    let testType;

    switch (testType) {
        case "Sanity":
            console.log("Type of Execution is Sanity");
            
            break;
        case "Regression":
            console.log("Type of Execution is Regression");
            
            break;
    
        default:
            console.log("Type of Execution is Smoke");
            
            break;
    }
    
}
launchBrowser();
runTests();