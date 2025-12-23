let quesArray = [
    // {
    //     question: "In a switch statement, why do most case clauses end with a break statement?",
    //     Option: {
    //         a: "",
    //         b: "",
    //         c: "",
    //         d: ""
    //     },
    //     answer: ""
    // },
    {
        question: "In a switch statement, why do most case clauses end with a break statement?",
        Option: {
            a: "To exit the entire function immediately",
            b: "To prevent fall-through and stop executing subsequent cases",
            c: "To reset all variables used inside the switch",
            d: "Because break is required after every statement in JS"
        },
        answer: "To prevent fall-through and stop executing subsequent cases"
    },

    {
        question: "Which clause acts like an else in an if...else chain inside a switch?",
        Option: {
            a: "case else",
            b: "fallback",
            c: "default",
            d: "catch"
        },
        answer: "default"
    },

    {
        question: "Given: switch(x) { case 1: a(); case 2: b(); default: c(); } Which functions run if x === 1?",
        Option: {
            a: "a() only",
            b: "a() then b() then c()",
            c: "a() then b()",
            d: "b() then c()"
        },
        answer: "a() then b() then c()"
    },

    {
        question: "Which of these is a key difference between for and while loops?",
        Option: {
            a: "for loops cannot use break",
            b: "while loops check the condition before running the block",
            c: "while loops always run at least once",
            d: "for loops only iterate arrays"
        },
        answer: "while loops check the condition before running the block"
    },

    {
        question: "Convert this for-loop to an equivalent while-loop: for(var i=0;i<3;i++){doStuff();}",
        Option: {
            a: "var i=0; while(i<3){ doStuff(); i++; }",
            b: "while(var i=0;i<3){doStuff();}",
            c: "var i=0; do { doStuff(); i++; } while(i<3);",
            d: "var i=0; while(i++<3) doStuff();"
        },
        answer: "var i=0; while(i<3){ doStuff(); i++; }"
    },

    {
        question: "What happens if you forget to increment a counter inside a while loop that depends on it?",
        Option: {
            a: "Loop ends immediately",
            b: "Infinite loop (unless broken)",
            c: "Counter magically increments",
            d: "The browser throws a syntax error"
        },
        answer: "Infinite loop (unless broken)"
    },

    {
        question: "Which loop guarantees its body runs at least once?",
        Option: {
            a: "for",
            b: "while",
            c: "do...while",
            d: "none of them"
        },
        answer: "do...while"
    },

    {
        question: "Which line completes a do...while so it runs while i <= 3?",
        Option: {
            a: "} until (i <= 3);",
            b: "} while (i <= 3);",
            c: "} end (i <= 3);",
            d: "} when (i <= 3);"
        },
        answer: "} while (i <= 3);"
    },

    {
        question: "Given: var i = 0; do { i++; } while (i < 0); How many times does the loop body run?",
        Option: {
            a: "0",
            b: "1",
            c: "Infinite",
            d: "2"
        },
        answer: "1"
    },

    {
        question: "Placing a <script> tag at the end of <body> vs in <head> primarily affects:",
        Option: {
            a: "How many functions you can declare",
            b: "When DOM elements are available to script",
            c: "Whether JS is allowed",
            d: "The language version used"
        },
        answer: "When DOM elements are available to script"
    },

    {
        question: "What attribute lets an external script load without blocking HTML parsing?",
        Option: {
            a: "async or defer",
            b: "blocking",
            c: "lazyload",
            d: "deferOnly"
        },
        answer: "async or defer"
    },

    {
        question: "Why prefer external .js files over inline scripts for production?",
        Option: {
            a: "Faster JS engine",
            b: "Better caching and separation of concerns",
            c: "JS won't run inline",
            d: "They reduce file size always"
        },
        answer: "Better caching and separation of concerns"
    },

    {
        question: "Which of the following is a single-line comment in JavaScript?",
        Option: {
            a: "/* comment */",
            b: "<!-- comment -->",
            c: "// comment",
            d: "# comment"
        },
        answer: "// comment"
    },

    {
        question: "Why write comments in code?",
        Option: {
            a: "They make the code run faster",
            b: "They explain intent and help others (and future you)",
            c: "They are executed only in dev builds",
            d: "They are required by browsers"
        },
        answer: "They explain intent and help others (and future you)"
    },

    {
        question: "Which comment type can span multiple lines?",
        Option: {
            a: "// only",
            b: "/* ... */",
            c: "<!-- -->",
            d: "// ... //"
        },
        answer: "/* ... */"
    },

    {
        question: "Which event fires when a link is clicked (and before navigation)?",
        Option: {
            a: "onhover",
            b: "onsubmit",
            c: "onclick / click",
            d: "onchange"
        },
        answer: "onclick / click"
    },

    {
        question: "How do you prevent a link from navigating to its href in a click handler?",
        Option: {
            a: "return false from handler or event.preventDefault()",
            b: "set link.disabled = true",
            c: "change href to \"#\" only",
            d: "you cannot prevent navigation"
        },
        answer: "return false from handler or event.preventDefault()"
    },

    {
        question: "Which is better: inline onclick=\"...\" or element.addEventListener(\"click\", fn)?",
        Option: {
            a: "Inline is better for separation of concerns",
            b: "addEventListener is preferable for multiple handlers & separation",
            c: "Both are identical in behavior and style",
            d: "Inline never works"
        },
        answer: "addEventListener is preferable for multiple handlers & separation"
    },

    {
        question: "Which event is commonly used to respond to a button press?",
        Option: {
            a: "onscroll",
            b: "onclick",
            c: "oninput",
            d: "onhover"
        },
        answer: "onclick"
    },

    {
        question: "When adding a click handler in JS, what must sayHello be?",
        Option: {
            a: "A string",
            b: "A function reference (no parentheses)",
            c: "A number",
            d: "Null"
        },
        answer: "A function reference (no parentheses)"
    },

    {
        question: "Which property sets a button to be disabled?",
        Option: {
            a: "disabled = true",
            b: "enabled = false",
            c: "setDisabled()",
            d: "readonly = true"
        },
        answer: "disabled = true"
    }
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

        ttlq.textContent = 69;                // just for the meme
    // ttlq.textContent = quesArray.length;                // just for the meme
    
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