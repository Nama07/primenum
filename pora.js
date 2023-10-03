function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

// Function to find and display prime numbers up to 1000
function primenums() {
    const result = [];
    for (let i = 2; i <= 1000; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    
    alert(result.join(', ')); // Display the prime numbers in an alert
}