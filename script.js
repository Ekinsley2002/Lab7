document.addEventListener('DOMContentLoaded', function () {
    const madLibForm = document.getElementById('madLibForm');
    const madLibResult = document.getElementById('madLibResult');

    madLibForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const noun = document.getElementById('noun').value;
        const adjective = document.getElementById('adjective').value;
        const verb = document.getElementById('verb').value;
        const adverb = document.getElementById('adverb').value;
        const place = document.getElementById('place').value;

        const madLib = `Once upon a time in a ${adjective} land, there lived a ${noun}. This ${noun} loved to ${verb} ${adverb} in the ${place}.`;

        madLibResult.textContent = madLib;
    });
});
