fetch("../content/readme.txt")
.then(function(res){
    // console.log(res.text())
    return res.text();
})
.then(function(data){
    // console.log(data);
    document.write(data);
})