function delay(duration) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve()
    }, duration)
  })
}

function logHi() {
  console.log('Hi')
}
delay(2000).then(logHi)

// //task 2
function makeDroids() {
  const droids = []
  for (let i = 0; i < 10; i++) {
    const droid = () => {
      console.log('D' + i)
    }
    droids.push(droid)
  }
  return droids
}
for (let d of makeDroids()) {
  d()
}

//task 3

function getPromise(min, max) {
  const timerValue = Math.floor(Math.random() * (max - min) + min) * 1000
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timerValue <= 2000) {
        return resolve(console.log('Promise resolved without any problems'))
      } else {
        return reject(console.error('Something went wrong'))
      }
    }, timerValue)
  })
}

getPromise(0, 11)

//task 4
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}

async function loadJson(url) {
  let response = await fetch(url)
  if (response.status == 200) {
    return response
  } else {
    throw new HttpError(response)
  }
}

async function demoGithubUser() {
  let request
  async function getDatas(callback) {
    try {
      request = await callback
      const data = await request.json()
      alert(data.name)

      if (!request.ok) {
        throw new HttpError()
      }
      return data.name
    } catch (error) {
      alert('We can’t find such user.')
      return error.response.status
    }
  }
  let dataResult
  do {
    let name = prompt('Login?', 'iliakan')
    dataResult = await getDatas(
      loadJson(`https://api.github.com/users/${name}`),
    )
  } while (dataResult > 200)
}
demoGithubUser()
