const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount;
}

const myCount = buildCount(2);
myCount();
myCount(4);