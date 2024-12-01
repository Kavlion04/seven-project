// 1chi masala yer yussasini topish
function kavlion() {
const a = 20;
const b = 40;
const S = a * b;
console.log(`Umumiy yer yuzasi: ${S} kvadrat metr.`);
alert(`Umumiy yer yuzasi: ${S} kvadrat metr.`);
}


// 2 chi masala  nolga teng bolmasinligi kere, yigindisi , kopaytmasini va shu ikkala sonlarning kvadratini hisoblash!
function natija() {


    const num1 = parseFloat(prompt("1-sonni kiriting (nolga teng bo'lmasin):"));
    const num2 = parseFloat(prompt("2-sonni kiriting (nolga teng bo'lmasin):"));
    if (num1 !== 0 && num2 !== 0) {
        const sum = num1 + num2;
        const product = num1 * num2;
        const square1 = num1 ** 2;
        const square2 = num2 ** 2;
        console.log(`yigindi: ${sum}`);
        console.log(`ko'paytma: ${product}`);
        console.log(`1-chi sonning kvadrati: ${square1}`);
        console.log(`2-chi sonning  kvadrati: ${square2}`);
        alert(`yigindi: ${sum}\nko'paytma: ${product}\n1-chi sonning kvadrati: ${square1}\n2-chi sonning kvadrati: ${square2}`);
    } else {
        alert("Iltimos, nolga teng bo'lmagan sonlarni kiriting!");
    }
}






// 3 chi masala ixtiyoriy sonlarni kiritish va ularning o'rtacha arifmetigi topish
function hisoblasin() {
    const num1 = parseFloat(prompt("1-sonni kiriting (nolga teng bo'lmasin):"));
    const num2 = parseFloat(prompt("2-sonni kiriting (nolga teng bo'lmasin):"));
    if (num1 !== 0 && num2 !== 0) {
        const average = (num1 + num2) / 2;
        console.log(`Kiritilgan sonlarning o'rta arifmetigi: ${average}`);
        alert(`Kiritilgan sonlarning o'rta arifmetigi: ${average}`);
    } else {
        alert("Iltimos, nolga teng bo'lmagan sonlarni kiriting!");
    }
}





// 4 chi masala juft yoki toq ekanligini aniqlash!
function hisobla() {


    const a = parseInt(prompt("miyengizga birinchi kelgan sonni oylang"));
    if (a % 2 === 0) {
        console.log(`${a} soni juft`);
        alert(`${a} kiritilgan soni juft`);
    } else {
        console.log(`${a} soni toq`);
        alert(`${a}kiritilgan soni toq`);
    }
}



// 5chi masala  5 ga va 3 ga bolinish teoramasi
function tekshir() {
    const A = Math.floor(Math.random() * 100) + 1;

    let result;
    if (A % 3 === 0 && A % 5 === 0) {
        result = `A soni (${A}) 3 va 5 ga bo'linadi!`;
        console.log(`A soni (${A}) 3 va 5 ga bo'linadi!`);
        alert(`A soni (${A}) 3 va 5 ga bo'linadi!`);
    } else if (A % 3 === 0) {
        result = `A soni (${A}) 3 ga bo'linadi!`;
        console.log(`A soni (${A}) 3 ga bo'linadi!`);
        alert(`A soni (${A}) 3 ga bo'linadi!`);
    } else if (A % 5 === 0) {
        result = `A soni (${A}) 5 ga bo'linadi!`;
        console.log(`A soni (${A}) 5 ga bo'linadi!`);
        alert(`A soni (${A}) 5 ga bo'linadi!`);
    } else {
        result = `A soni (${A}) 3 va 5 ga bo'linmaydi!`;
        console.log(`A soni (${A}) 3 va 5 ga bo'linmaydi!`);
        alert (`A soni (${A}) 3 va 5 ga bo'linmaydi!`);
    }
    document.getElementById("natijasi").innerText = result;
}




// 6 chi masala  Ixtiyoriy A va B sonlari 5 ga eng yaqinini console ga chiqarish
function engYaqin() {


    const A = Math.floor(Math.random() * 100) + 1;
    const B = Math.floor(Math.random() * 100) + 1;
    console.log("A soni: " + A);
    console.log("B soni: " + B);
    const diffA = Math.abs(A - 5);
    const diffB = Math.abs(B - 5);
    if (diffA < diffB) {
        console.log("A soni 5 ga eng yaqin: " + A);
        alert("99% dan 1% 2 son bir hil boladi--- A soni 5 ga eng yaqin: " + A);
    } else if (diffB < diffA) {
        console.log("B soni 5 ga eng yaqin: " + B);
        alert("99% dan 1% 2 son bir hil boladi---B soni 5 ga eng yaqin: " + B);
    } else {
        console.log("A va B sonlari 5 ga teng yaqin: " + A + " va " + B);
        alert(" men kutgan damlar keldi ---A va B sonlari 5 ga teng yaqin: " + A + " va " + B);

    }
}


//7 chi masala ixtiyoriy 1 va oxirigi sonlarning yig'indisi yasash
function hisoblar() {
    const sonlar = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    const birinchi = sonlar[0];
    const oxirgi = sonlar[sonlar.length - 1];
    const yigindi = birinchi + oxirgi;
    document.getElementById("natijasis").innerText =
        `Sonlar: ${sonlar.join(", ")}\nBirinchi element: ${birinchi}\nOxirgi element: ${oxirgi}\nYig'indisi: ${yigindi}`;
}






