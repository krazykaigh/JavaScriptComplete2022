const task3Element = document.getElementById('task-3').addEventListener('click',function iAlert () {
    alert('Alert I work');
});

function getName (nameIt) {
    alert(nameIt);
}

function threeStrings (str1, str2, str3) {
    let fullStr = str1 + str2 + str3;
    return fullStr;
}


iAlert();
getName('Jim');

alert(threeStrings('Hello ', 'Mr. ', 'Reynolds'));
