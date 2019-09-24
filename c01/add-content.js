var today = new Date();
var hournow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hournow > 0) {
    greeting = 'Good morning!';   
} else {
    greeting = 'welcome!';
}

document.write('<h3>'+ greeting +'</h3>');
