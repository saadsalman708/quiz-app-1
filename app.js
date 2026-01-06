let quesArray = [
    {
        question: "Is that joke good?",
        Option: {
            a: "It's amazing",
            b: "Not Bad",
            c: "Somewhat",
            d: "I hate it"
        },
        answer: "It's amazing"
    },
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
    },
    {
        question: "Which event triggers when the mouse pointer moves over an element?",
        Option: {
            a: "mousemove",
            b: "mouseover / mouseenter",
            c: "mousedrag",
            d: "mousehold"
        },
        answer: "mouseover / mouseenter"
    },

    {
        question: "Which event should you use for swapping an image when the user mouses over it?",
        Option: {
            a: "onload",
            b: "onmouseover",
            c: "onscroll",
            d: "onchange"
        },
        answer: "onmouseover"
    },

    {
        question: "What is important to remember about mouse events on touch devices?",
        Option: {
            a: "They behave identically",
            b: "They may not fire; use touch events or pointer events",
            c: "Touch devices convert clicks to hover",
            d: "Mouse events are faster"
        },
        answer: "They may not fire; use touch events or pointer events"
    },

    {
        question: "Which event fires when an input field loses focus?",
        Option: {
            a: "onblur",
            b: "onchange",
            c: "onfocus",
            d: "oninput"
        },
        answer: "onblur"
    },

    {
        question: "Which two events are useful for live validation as the user types?",
        Option: {
            a: "onkeyup and onkeypress",
            b: "oninput and onkeyup",
            c: "onload and onclick",
            d: "onblur and onfocus"
        },
        answer: "oninput and onkeyup"
    },

    {
        question: "What value does a text field have if the user clicks Cancel on a prompt?",
        Option: {
            a: "undefined",
            b: "null",
            c: "empty string",
            d: "false"
        },
        answer: "null"
    },

    {
        question: "How do you read the value of an <input id=\"email\"> element?",
        Option: {
            a: "document.getElementById(\"email\").value",
            b: "document.value(\"email\")",
            c: "getValue(\"email\")",
            d: "document.getElementsByName(\"email\")[0].text"
        },
        answer: "document.getElementById(\"email\").value"
    },

    {
        question: "For a select (dropdown), how do you get the selected option text?",
        Option: {
            a: "select.value only",
            b: "select.options[select.selectedIndex].text",
            c: "select.selectedText",
            d: "document.selectedOptionText(select)"
        },
        answer: "select.options[select.selectedIndex].text"
    },

    {
        question: "Why cast prompt results to number when expecting numeric input?",
        Option: {
            a: "prompt already returns numbers",
            b: "prompt returns strings so numeric math would do concatenation",
            c: "casting slows code",
            d: "you cannot cast prompts"
        },
        answer: "prompt returns strings so numeric math would do concatenation"
    },

    {
        question: "How do you set the value of an input field with id=\"name\"?",
        Option: {
            a: "document.getElementById(\"name\").value = \"Saad\";",
            b: "document.setValue(\"name\",\"Saad\");",
            c: "document.getElementById(\"name\").innerHTML = \"Saad\";",
            d: "setValue(\"name\",\"Saad\");"
        },
        answer: "document.getElementById(\"name\").value = \"Saad\";"
    },

    {
        question: "Which method sets a checkbox checked state?",
        Option: {
            a: "checkbox.checked = true",
            b: "checkbox.value = true",
            c: "checkbox.setChecked()",
            d: "checkbox.toggle(true)"
        },
        answer: "checkbox.checked = true"
    },

    {
        question: "If you want to fill a field and trigger change handlers, what should you do after setting .value programmatically?",
        Option: {
            a: "call element.dispatchEvent(new Event(\"change\"))",
            b: "call element.triggerChange()",
            c: "call document.refresh()",
            d: "do nothing; handlers always run"
        },
        answer: "call element.dispatchEvent(new Event(\"change\"))"
    },

    {
        question: "How do you get the HTML content of the third <p> in a collection p?",
        Option: {
            a: "p[2].innerHTML",
            b: "p[3].innerHTML",
            c: "p.innerHTML(2)",
            d: "p.get(2).html"
        },
        answer: "p[2].innerHTML"
    },

    {
        question: "What property sets only the text content (not HTML) of an element?",
        Option: {
            a: "innerText / textContent",
            b: "innerHTML",
            c: "outerHTML",
            d: "value"
        },
        answer: "innerText / textContent"
    },

    {
        question: "Which is safer to avoid XSS when inserting user text into a paragraph?",
        Option: {
            a: "Use innerHTML with sanitized markup",
            b: "Use textContent (or innerText)",
            c: "Use outerHTML",
            d: "Use eval()"
        },
        answer: "Use textContent (or innerText)"
    },

    {
        question: "To change an <img id=\"i1\"> source, use:",
        Option: {
            a: "document.getElementById(\"i1\").src = \"new.jpg\"",
            b: ".setSource()",
            c: ".changeSrc()",
            d: "img.src(\"new.jpg\")"
        },
        answer: "document.getElementById(\"i1\").src = \"new.jpg\""
    },

    {
        question: "What is a good approach to swap two images on hover for performance?",
        Option: {
            a: "preload the swapping images and change src on hover",
            b: "change the image dimensions instead",
            c: "use eval() to set new images",
            d: "replace <img> nodes entirely each time"
        },
        answer: "preload the swapping images and change src on hover"
    },

    {
        question: "Changing an element's innerHTML that contains images may cause what?",
        Option: {
            a: "Images to remain same",
            b: "Existing image elements to be recreated (losing JS state)",
            c: "Faster rendering always",
            d: "No change in DOM"
        },
        answer: "Existing image elements to be recreated (losing JS state)"
    },

    {
        question: "Which event pair is commonly used to swap an image when the pointer enters/leaves an image?",
        Option: {
            a: "mouseover / mouseout",
            b: "mousedown / mouseup",
            c: "onload / onunload",
            d: "mouseenter / leave"
        },
        answer: "mouseover / mouseout"
    },

    {
        question: "Which method adds a class to an element without overwriting its existing classes?",
        Option: {
            a: "el.className = \"new\"",
            b: "el.setClass(\"new\")",
            c: "el.classList.add(\"new\")",
            d: "addClass(el,\"new\")"
        },
        answer: "el.classList.add(\"new\")"
    },

    {
        question: "Which is the JS property to change inline style of an element?",
        Option: {
            a: "element.style.backgroundColor = \"red\"",
            b: "element.css(\"background-color\",\"red\")",
            c: "element.setStyle(\"background\",\"red\")",
            d: "element.style(\"backgroundColor\",\"red\")"
        },
        answer: "element.style.backgroundColor = \"red\""
    },

    {
        question: "What does document.getElementsByTagName(\"p\") return?",
        Option: {
            a: "An array of <p> nodes",
            b: "A live HTMLCollection of <p> elements",
            c: "A NodeList snapshot",
            d: "Always null"
        },
        answer: "A live HTMLCollection of <p> elements"
    },

    {
        question: "Which node is at the top of the DOM hierarchy for a webpage?",
        Option: {
            a: "html",
            b: "body",
            c: "document",
            d: "head"
        },
        answer: "document"
    },

    {
        question: "Which API method creates a new element node (not yet in DOM)?",
        Option: {
            a: "document.createElement(\"div\")",
            b: "document.newElement(\"div\")",
            c: "document.insert(\"div\")",
            d: "create(\"div\")"
        },
        answer: "document.createElement(\"div\")"
    },

    {
        question: "Which property returns the number of child nodes of an element?",
        Option: {
            a: "childrenCount",
            b: "childNodes.length",
            c: "childCount",
            d: "node.children.lengthOnly"
        },
        answer: "childNodes.length"
    },

    {
        question: "Which approach is recommended when counting element children and avoiding whitespace text nodes?",
        Option: {
            a: "Use nodeType checks or element.children / firstElementChild",
            b: "Remove all whitespace from HTML",
            c: "Assume no text nodes exist",
            d: "Use innerText to count elements"
        },
        answer: "Use nodeType checks or element.children / firstElementChild"
    },
    {
        question: "Which modern query allows complex CSS selectors for scoped search?",
        Option: {
            a: "getElementByClassName",
            b: "querySelector / querySelectorAll",
            c: "getScopedElements",
            d: "scopedQuery"
        },
        answer: "querySelector / querySelectorAll"
    },

    {
        question: "Which is true about getElementsByTagName vs querySelectorAll?",
        Option: {
            a: "getElementsByTagName returns NodeList snapshot",
            b: "querySelectorAll returns static NodeList while getElementsByTagName returns live HTMLCollection",
            c: "Both always return arrays",
            d: "querySelectorAll is slower and always wrong"
        },
        answer: "querySelectorAll returns static NodeList while getElementsByTagName returns live HTMLCollection"
    },

    {
        question: "What are the three basic node types commonly seen in the DOM?",
        Option: {
            a: "document, style, script",
            b: "element, text, document",
            c: "object, array, string",
            d: "node, token, tree"
        },
        answer: "element, text, document"
    },

    {
        question: "If div contains two <p> elements, those <p> nodes are called what relative to div?",
        Option: {
            a: "parents",
            b: "children",
            c: "siblings",
            d: "ancestors"
        },
        answer: "children"
    },

    {
        question: "In the DOM, what is the parent of <body>?",
        Option: {
            a: "div",
            b: "html",
            c: "document",
            d: "head"
        },
        answer: "html"
    },

    {
        question: "Which term describes nodes with the same parent?",
        Option: {
            a: "siblings",
            b: "cousins",
            c: "neighbors",
            d: "peers"
        },
        answer: "siblings"
    },

    {
        question: "Which property references the first child node of an element?",
        Option: {
            a: "firstChild",
            b: "childNodes[0]",
            c: "both of the above",
            d: "firstElementOnly"
        },
        answer: "both of the above"
    },

    {
        question: "Which method narrows tag selection to within a parent element?",
        Option: {
            a: "document.querySelectorAll with :scope",
            b: "parent.getElementsByTagName(\"p\")",
            c: "document.getElementsByTagName(\"p\") always",
            d: "You cannot narrow selection"
        },
        answer: "parent.getElementsByTagName(\"p\")"
    },

    {
        question: "Which event pair is better than mouseover/mouseout for avoiding bubbling issues?",
        Option: {
            a: "mouseenter / mouseleave",
            b: "mousemove / mouseup",
            c: "mousedown / mouseup",
            d: "mouseover / mouseout"
        },
        answer: "mouseenter / mouseleave"
    },

    {
        question: "What is a drawback of modifying many inline styles directly from JS?",
        Option: {
            a: "It is impossible",
            b: "It can be harder to maintain vs toggling classes and using CSS",
            c: "Inline styles always win and are preferred",
            d: "They are ignored by browsers"
        },
        answer: "It can be harder to maintain vs toggling classes and using CSS"
    },

    {
        question: "How would you set multiple styles safely while preserving existing styles?",
        Option: {
            a: "element.style.cssText += \"font-weight:bold;\"",
            b: "element.style = \"...\"",
            c: "element.setAttribute(\"style\",\"...\")",
            d: "Replace the element entirely"
        },
        answer: "element.style.cssText += \"font-weight:bold;\""
    },

    {
        question: "document.getElementById(\"i12\").onmouseover = swapPic; — what must swapPic do?",
        Option: {
            a: "change source: document.getElementById(\"i12\").src = \"x.jpg\"",
            b: "return true",
            c: "call alert() only",
            d: "create a new image tag and append it"
        },
        answer: "change source: document.getElementById(\"i12\").src = \"x.jpg\""
    },

    {
        question: "What is a benefit of changing classes instead of src for swapping visuals?",
        Option: {
            a: "Allows CSS transitions and toggles multiple style changes",
            b: "Classes are only for text",
            c: "Class changes break images",
            d: "None — src is always better"
        },
        answer: "Allows CSS transitions and toggles multiple style changes"
    },

    {
        question: "Which property returns a live DOMTokenList of classes?",
        Option: {
            a: "element.classes",
            b: "element.classList",
            c: "element.classNames",
            d: "element.getClassList()"
        },
        answer: "element.classList"
    },

    {
        question: "Why use class toggling for image state instead of changing src directly?",
        Option: {
            a: "It keeps logic and styling separated and enables CSS effects",
            b: "It prevents images from loading",
            c: "It is required by browsers",
            d: "It is slower"
        },
        answer: "It keeps logic and styling separated and enables CSS effects"
    },

    {
        question: "Which event fires continuously as the mouse moves?",
        Option: {
            a: "mouseover",
            b: "mousemove",
            c: "mouseenter",
            d: "mousedown"
        },
        answer: "mousemove"
    },

    {
        question: "Which event fires when an element gains focus?",
        Option: {
            a: "onblur",
            b: "onchange",
            c: "onfocus",
            d: "oninput"
        },
        answer: "onfocus"
    },

    {
        question: "What does Array.from(document.getElementsByTagName(\"p\")) do?",
        Option: {
            a: "Returns a live collection",
            b: "Converts the collection into a static array snapshot",
            c: "Deletes all <p> elements",
            d: "Returns null"
        },
        answer: "Converts the collection into a static array snapshot"
    },

    {
        question: "Which DOM property ignores text nodes and returns only elements?",
        Option: {
            a: "childNodes",
            b: "children",
            c: "firstChild",
            d: "nodeList"
        },
        answer: "children"
    },

    {
        question: "Which property returns the last element child only?",
        Option: {
            a: "lastChild",
            b: "lastNode",
            c: "lastElementChild",
            d: "finalChild"
        },
        answer: "lastElementChild"
    },

    {
        question: "Which approach best prevents JavaScript from running before the DOM is ready?",
        Option: {
            a: "Place script in <head> without attributes",
            b: "Use defer attribute or place script before </body>",
            c: "Use inline scripts only",
            d: "Use eval()"
        },
        answer: "Use defer attribute or place script before </body>"
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
            customClass: {
                popup: 'custom-alert',
            }
        });
        return;
    }

    if (!emailRegex.test(email)) {
        Swal.fire({
            title: 'Invalid Email',
            icon: 'error',
            customClass: {
                popup: 'custom-alert',
            }
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

    shuffleQues();
}





function loadQuiz() {

    ttlq.textContent = quesArray.length;

    confirmPage.classList.add("d-none");
    quizPage.classList.remove("d-none");

    qzBtn.setAttribute("disabled", true);
    qzBtn.classList.add("dis-Btn");

    crtq.textContent = counter + 1;

    let q = quesArray[counter];

    que.innerHTML = `<span class="fw-bold me-1">Q${counter + 1}.</span>  ${q.question}`;

    let optC = opt.children;

    let arr = [0, 1, 2, 3];
    for (let i = arr.length - 1; i > 0; i--) {

        if (counter != 0) {

            let r = Math.floor(Math.random() * (i + 1));

            let temp = arr[i];
            arr[i] = arr[r];
            arr[r] = temp;
            console.log(arr);
        }
    }

    optC[arr[0]].textContent = q.Option.a;
    optC[arr[1]].textContent = q.Option.b;
    optC[arr[2]].textContent = q.Option.c;
    optC[arr[3]].textContent = q.Option.d;

    for (const li of optC) {
        li.classList.add("li-Hover");
        li.classList.remove("crct-Ans", "wrong-Ans");
        li.setAttribute("onclick", "selectLi(this)");
    }
}





function selectLi(ele) {

    let optC = opt.children;

    for (const li of optC) {
        li.classList.remove("li-Hover");
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




function shuffleQues() {
    for (let i = quesArray.length - 1; i > 1; i--) {

        let r = Math.floor(Math.random() * (i)) + 1;

        let temp = quesArray[i];
        quesArray[i] = quesArray[r];
        quesArray[r] = temp;
        console.log(quesArray);
    }
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