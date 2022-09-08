/* Callback function */

///Callback function:A callback is a function passed as an argument to another function.
/// একটি function এর মধ্যে অন্য function call

function greeting(greetingHandler, name){
//// greetingHandler function call into greeting function
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

/// callback function use
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Rasel')


function submitHandler(){
    console.log('submit button clicked')
}

/// call function use using button
document.getElementById('btn-submit').addEventListener('click',submitHandler)
