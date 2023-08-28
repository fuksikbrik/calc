let inp = document.querySelector('.inp');

const calc = () => {
    
    let sum = document.querySelector(".sum").value;
    let result = document.querySelector('.result');
    result.innerHTML = `<p>result: ${sum * 2}</p>`
};

inp.addEventListener('change', calc)



