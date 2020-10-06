
    d3.request("https://assaultdb.herokuapp.com/test")
    .header("X-Requested-With", "XMLHttpRequest")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post("a=2&b=3", callback);