function one(call_two) {
    console.log("step 1 complete.please call step two");
    call_two();
}

function two() {
    console.log("step2");
}
one(two);