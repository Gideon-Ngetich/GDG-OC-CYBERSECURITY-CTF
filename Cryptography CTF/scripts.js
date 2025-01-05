const endpoint = 'http://localhost:7250'

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
                window.location.href = '/Cryptography%20CTF/challenge2.html'

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
                window.location.href = '/Cryptography%20CTF/challenge3.html'
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
                window.location.href = '/Cryptography%20CTF/challenge5.html'
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
