





function teach(sub: string): () => void {
    console.log(`teaching ${sub}`)
    const notes = `${sub}-notes`
    const fun = "bla bla bla bla";
    function learn() {
        console.log(`learning with ${notes}`)
    }
    // learn();
    console.log(`teaching ${sub} ends`)
    return learn;
}


let learnFunc = teach("typescript");
learnFunc();
learnFunc = null;
