function getRandomLetter() {
    const alphabet = [...Array(93)].map((_, i) => String.fromCharCode(i + 33)); ;
    return alphabet[Math.round(Math.random() * alphabet.length)];
};

document.getElementById("generate").onclick  = function() {
    var passlength = document.getElementById("password_length").value;


    var password = [];
    for (i=0; i < passlength; i++) {
        password.push(getRandomLetter())
    };
    var textPassword = password.join('');
    console.log(textPassword);
    document.getElementById("password_text").innerHTML = textPassword;
};