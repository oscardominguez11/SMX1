let url = location.search;

console.log(url);




let params = new URLSearchParams(location.search);

let q = params.get("input1");

let w = params.get("input2");

document.write(q + "</br>" + w)

