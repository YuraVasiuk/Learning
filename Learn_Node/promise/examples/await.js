async function hi() {
    try {
        while (i < 5) {
            var hi = await q_http.read(url);
            var hi2 = await q_http.read(hi + 'asdfa');
            i++;
        }
    } catch (e) {

    }

}

hi();
console.log('11');
