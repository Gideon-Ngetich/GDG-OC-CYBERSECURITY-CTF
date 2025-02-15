// const endpoint = 'http://localhost:7250'
const endpoint = 'https://gdg-oc-cybersecurity-ctf.onrender.com'


async function challengeOneFlagValidator() {
    const flag = document.getElementById('flag').value.trim();
    const remark = document.getElementById('remark')
    const challengeId = 'CH012025'

    if (flag === '') {
        remark.innerHTML = `
        <div class="bg-red-500 p-3 border-red-500 md:w-full rounded-md text-center">Please enter a value</div>
    `
        setTimeout(() => {
            remark.innerHTML = ''
        }, 3000)

        return
    }

    try {
        const response = await fetch(`${endpoint}/api/submitflag`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                flag,
                challengeId
            })
        })

        if (response.ok) {
            const result = response.json()
            remark.innerHTML = `
                <div class="bg-green-400 p-3 border-green-500 md:w-3/4 rounded-md text-center">Congratulation expolorer you have found the flag. Keep up the challenge. You'll be redirected to the next challenge shortly</div>
            `
            setTimeout(() => {
                window.location.href = '/challenge2.html'

            }, 5000)
            console.log({ 'Success': result })
        } else {
            remark.innerHTML = `
                <div class="bg-red-500 p-3 border-red-500 md:w-3/4 rounded-md text-center">Incorrect flag. Keep on trying, you got this.</div>
            `
            setTimeout(() => {
                remark.innerHTML = ''
            }, 4000);
            console.log({ 'Failed to send data': response.status })
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

async function challengeTwoFlagValidator() {
    const flag = document.getElementById('flag').value
    const remark = document.getElementById('remark')
    const challengeId = 'CH022025'

    if (flag === '') {
        remark.innerHTML = `
                    <div class="bg-red-500 p-3 border-red-500 md:w-full rounded-md text-center">Please enter a value</div>

            `
    }
    setTimeout(() => {
        remark.innerHTML = ''
    }, 2000)
    try {
        const response = await fetch(`${endpoint}/api/submitflag`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                flag,
                challengeId
            })
        })

        if (response.ok) {
            const result = response.json()
            remark.innerHTML = `
                            <div class="bg-green-400 p-3 border-green-500 md:w-3/4 rounded-md text-center">Congratulation expolorer you have found the flag. Keep up the challenge. You'll be redirected to the next challenge shortly</div>

            `
            setTimeout(() => {
                window.location.href = '/challenge3.html'
                
            }, 4000)

            console.log({ 'Success': result })
        } else {
            remark.innerHTML = `
                <div class="bg-red-500 p-3 border-red-500 md:w-3/4 rounded-md text-center">Incorrect flag. Keep on trying, you got this.</div>
            `
            setTimeout(() => {
                remark.innerHTML = ''
            }, 4000);
            console.log({ 'Failed to send data': response.status })
        }
    } catch (error) {
        console.error('Error sending data:', error);

    }
}

async function challengeThreeFlagValidator() {
    const flag = document.getElementById('flag').value
    const remark = document.getElementById('remark')
    const challengeId = 'CH032025'

    if (flag === '') {
        remark.innerHTML = `
                    <div class="bg-red-500 p-3 border-red-500 md:w-full rounded-md text-center">Please enter a value</div>

            `
    }
    setTimeout(() => {
        remark.innerHTML = ''
    }, 2000)
    try {
        const response = await fetch(`${endpoint}/api/submitflag`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                flag,
                challengeId
            })
        })

        if (response.ok) {
            const result = response.json()
            remark.innerHTML = `
                            <div class="bg-green-400 p-3 border-green-500 md:w-3/4 rounded-md text-center">Congratulation expolorer you have found the flag. Keep up the challenge. You'll be redirected to the next challenge shortly</div>

            `
            setTimeout(() => {
                window.location.href = '/challenge4.html'
            }, 4000)

            console.log({ 'Success': result })
        } else {
            remark.innerHTML = `
                <div class="bg-red-500 p-3 border-red-500 md:w-3/4 rounded-md text-center">Incorrect flag. Keep on trying, you got this.</div>
            `
            setTimeout(() => {
                remark.innerHTML = ''
            }, 4000);
            console.log({ 'Failed to send data': response.status })
        }
    } catch (error) {
        console.error('Error sending data:', error);

    }
}

function generateRandomString(length = 16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

async function sendRandomValueToServer() {
    const randomValue = generateRandomString(16); // You can change the length

    // Sending the value to the backend (Node.js server)
    try {
        const response = await fetch(`${endpoint}/api/random`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ randomValue }), // Send the random value in the body
        });

        const data = await response.json();
        console.log('Server response:', data);
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
}

// Call the function when the page loads

