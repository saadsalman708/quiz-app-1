let quesArray = [
    {
        num: 1,
        question: "JavaScript mein variable declare karne ke liye kaunsa keyword use hota hai?",
        Option: {
            a: "var",
            b: "int",
            c: "string",
            d: "float"
        },
        answer: "var"
    },
    {
        num: 2,
        question: "JavaScript ka kaunsa data type nahi hai?",
        Option: {
            a: "Number",
            b: "Boolean",
            c: "Float",
            d: "String"
        },
        answer: "Float"
    },
    {
        num: 3,
        question: "JavaScript code ko HTML mein add karne ke liye kaunsa tag use hota hai?",
        Option: {
            a: "js",
            b: "javascript",
            c: "script",
            d: "code"
        },
        answer: "script"
    },
    {
        num: 4,
        question: "JavaScript mein array index kis se start hota hai?",
        Option: {
            a: "1",
            b: "0",
            c: "-1",
            d: "2"
        },
        answer: "0"
    },
    {
        num: 5,
        question: "JavaScript mein function ka correct syntax kaunsa hai?",
        Option: {
            a: "function myFunc() {}",
            b: "def myFunc() {}",
            c: "func myFunc() {}",
            d: "create myFunc() {}"
        },
        answer: "function myFunc() {}"
    },
    {
        num: 6,
        question: "JavaScript mein === operator ka kya kaam hai?",
        Option: {
            a: "Value compare karta hai",
            b: "Type compare karta hai",
            c: "Value aur type dono compare karta hai",
            d: "Assignment karta hai"
        },
        answer: "Value aur type dono compare karta hai"
    },
    {
        num: 7,
        question: "JavaScript mein object kaise banaya jata hai?",
        Option: {
            a: "var obj = {}",
            b: "var obj = []",
            c: "var obj = ()",
            d: "var obj = <>"
        },
        answer: "var obj = {}"
    },
    {
        num: 8,
        question: "JavaScript mein kaunsa loop nahi hota?",
        Option: {
            a: "for",
            b: "while",
            c: "foreach",
            d: "do-while"
        },
        answer: "foreach"
    },
    {
        num: 9,
        question: "JavaScript mein null ka matlab kya hota hai?",
        Option: {
            a: "Undefined value",
            b: "Empty string",
            c: "No value",
            d: "Zero"
        },
        answer: "No value"
    },
    {
        num: 10,
        question: "JavaScript mein console.log() ka use kya hai?",
        Option: {
            a: "Data store karna",
            b: "Output print karna",
            c: "HTML create karna",
            d: "Function call karna"
        },
        answer: "Output print karna"
    },
];





const startPage = document.querySelector(".start-page");
const inputPage = document.querySelector(".input-page");
const confirmPage = document.querySelector(".confirm-page");
const quizPage = document.querySelector(".quiz-page");
const resultPage = document.querySelector(".result-page");

const stBtn = document.querySelector(".st-btn");
const intBtn = document.querySelector(".int-btn");
const cnfBtn = document.querySelector(".cnf-btn");
const qzBtn = document.querySelector(".qz-btn");

let ipName = document.querySelector("#ip-name");
let ipRoll = document.querySelector("#ip-roll");
let ipEmail = document.querySelector("#ip-email");
let ipInst = document.querySelector("#ip-inst");

let cpName = document.querySelector(".cp-name");
let cpRoll = document.querySelector(".cp-roll");
let cpEmail = document.querySelector(".cp-email");
let cpInst = document.querySelector(".cp-inst");

let crtq = document.querySelector(".crt-q");
let ttlq = document.querySelector(".ttl-q");
let que = document.querySelector(".que");
let opt = document.querySelector(".opt");

let aq = document.querySelector(".aq");
let ca = document.querySelector(".ca");
let wa = document.querySelector(".wa");
let per = document.querySelector(".per");

let rpName = document.querySelector(".rp-name");
let rpEmail = document.querySelector(".rp-email");
let rpRoll = document.querySelector(".rp-roll");
let rpInst = document.querySelector(".rp-inst");

let counter = 0;
let correctAns = 0;
let wrongAns = 0;





function loadInput() {
    startPage.classList.add("d-none");
    inputPage.classList.remove("d-none");

    ttlq.textContent = quesArray.length;
}





function loadConfirm() {

    let name = ipName.value.trim();
    let roll = ipRoll.value.trim();
    let email = ipEmail.value.trim();
    let inst = ipInst.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !roll || !email || !inst) {
        Swal.fire({
            title: 'Please! Fill all the Details',
            icon: 'warning',
            // customClass: {
            //     popup: 'custom-alert',
            // }
        });
        return;
    }

    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Invalid Email',
            icon: 'error',
            // customClass: {
            //     popup: 'custom-alert',
            // }
        });
        return;
    }

    cpName.textContent = name;
    cpRoll.textContent = roll;
    cpEmail.textContent = email;
    cpInst.textContent = inst;

    inputPage.classList.add("d-none");
    confirmPage.classList.remove("d-none");

    rpName.textContent = name;
    rpRoll.textContent = roll;
    rpEmail.textContent = email;
    rpInst.textContent = inst;
}





function loadQuiz() {
    confirmPage.classList.add("d-none");
    quizPage.classList.remove("d-none");

    qzBtn.setAttribute("disabled", true);
    qzBtn.classList.add("dis-Btn");

    crtq.textContent = counter + 1;

    let q = quesArray[counter];

    que.textContent = q.question;

    let optC = opt.children;

    // let s = Math.floor(Math.random() * 4) +1;

    // for (let li of optC) {
    //     li.textContent        
    // }

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array.length; j++) {
    //         if (i == j) {
    //             console.log("noooo");
    //         }            
    //     }        
    // }

    let arr = [0, 1, 2, 3];

    // let r1 = Math.floor(Math.random() * 3);
    // let r2 = Math.floor(Math.random() * 3);
    // let r3 = Math.floor(Math.random() * 3);
    
    // let c1 = arr.splice(r1 , 1);
    // let c2 = arr.splice(r2 , 1);
    // let c3 = arr.splice(r3 , 1);

    // arr.push(c1[0]);
    // arr.push(c2[0]);
    // arr.push(c3[0]);

    // console.log(r1);
    // console.log(r2);
    // console.log(r3);
    // console.log(arr);




    for (let i = arr.length; i > 0; i--) {

        let r = Math.floor(Math.random() * i);
        let copy = arr.slice(0);      
        // let c = arr.splice(r , 1);
        // arr.push(c[0]);
        
        copy[i] = arr[r];
        copy[r] = arr[i];
        
        console.log(copy); 
    }
    





    optC[0].textContent = q.Option.a;
    optC[1].textContent = q.Option.b;
    optC[2].textContent = q.Option.c;
    optC[3].textContent = q.Option.d;

    for (const li of optC) {
        li.classList.remove("crct-Ans", "wrong-Ans");
        li.setAttribute("onclick", "selectLi(this)");
    }
}





function selectLi(ele) {

    let optC = opt.children;

    for (const li of optC) {
        li.removeAttribute("onclick");
    }

    if (ele.textContent === quesArray[counter].answer) {
        ele.classList.add("crct-Ans");
        correctAns++;
    } else {
        ele.classList.add("wrong-Ans");
        wrongAns++;

        for (let li of optC) {
            if (li.textContent === quesArray[counter].answer) {
                li.classList.add("crct-Ans");
            }
        }
    }

    qzBtn.removeAttribute("disabled");
    qzBtn.classList.remove("dis-Btn");
}





function loadResult() {
    quizPage.classList.add("d-none");
    resultPage.classList.remove("d-none");

    aq.textContent = quesArray.length;
    ca.textContent = correctAns;
    wa.textContent = wrongAns;
    let ckPers = Math.floor((correctAns / quesArray.length) * 100);
    per.textContent = ckPers + "%";
}










stBtn.addEventListener("click", () => {
    loadInput();
});

intBtn.addEventListener("click", () => {
    loadConfirm();
});

cnfBtn.addEventListener("click", () => {
    loadQuiz();
});

qzBtn.addEventListener("click", () => {
    counter++;

    if (counter < quesArray.length) {
        loadQuiz();
    } else {
        loadResult();
    }
});