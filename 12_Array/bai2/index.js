let x = [-3, 5, 1, 3, 2, 10];
// console.log(x.length);

const daoNguocmang = () => {
    let firs = 0;
    let last = x.length - 1;
    while (firs < last) {
        let b = x[firs];
        x[firs] = x[last]
        x[last] = b;
        firs++
        last--
    }
    console.log(x);
}

daoNguocmang()