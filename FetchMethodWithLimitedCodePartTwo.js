
    /* Fetch Data From README TEXT FILE */
    
    // fetch("../content/readme.txt")
    // .then((res)=>res.text())
    // .then((data)=>document.write(data));

    /* Fetching Data from API */
    
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    // .then((res)=>res.json())
    // .then((data)=>console.log(data));

   //PRINTING DATA IN Console AND In Document 
    
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res)=>res.json())
    // .then((data)=>{
    //     console.log(data);

    //     for (var x in data){
    //         document.write(x);
    //     }
    // });

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);

        for (var x in data){
            document.write(`${data[x].name}<br>`);
            document.write(`${data[x].email}<br>`);
        }
    });



