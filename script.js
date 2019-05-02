const fibonacci = number => {
    let arr = [0, 1];
    for (let i = 2; i < number + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

const generateSequence = e => {
    const resultDiv = document.querySelector('.result');
    const inputValue = document.getElementById("input").value;

    if (inputValue < 2) {
        resultDiv.innerHTML = "Please, enter a number higher than 2.";
        resultDiv.classList.add('error');
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerHTML = fibonacci(parseInt(inputValue) - 1);
        resultDiv.style.display = "block";
        resultDiv.classList.remove('error');
        resultDiv.style.whiteSpace = "nowrap";
        resultDiv.style.overflow = "hidden";
        resultDiv.style.textOverflow = "ellipsis";
    }

    e.preventDefault();
}