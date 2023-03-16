/*
    Live Change Text On Input
*/

document.getElementById('title').onkeyup = function () {

    'use strict';

    document.getElementById('title-live').textContent = this.value;
};

document.getElementById('content').onkeyup = function () {

    'use strict';

    document.getElementById('content-live').textContent = this.value;
};