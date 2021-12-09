const taskOneButton = document.getElementsByClassName('task-one-button')[0]
// const firstInput = document.querySelector('#first-input')
// const secondInput = document.querySelector('#second-input')

const downloads = [
  {
    id: 1,
    title: 'Recipe',
    status: 'Done',
  },
  {
    id: 2,
    title: 'Workouts',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Passwords',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'To Do 2021',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Books',
    status: 'Failed',
  },
]

function changeItemProperty() {
  const currentInterval = setInterval(main, 5000)
  function main() {
    console.log('Check started')
    const filtered = downloads.filter((e) => e.status === 'Pending')
    if (filtered.length) {
      for (let i = 0; i < downloads.length; i++) {
        if (downloads[i].status === 'Pending') {
          change(i)
          break
        }
      }
    } else {
      killInterval()
    }
  }
  function change(index) {
    downloads[index].status = 'Done'
  }

  function killInterval() {
    clearInterval(currentInterval)
  }
}

taskOneButton.addEventListener('click', () => {
  setTimeout(changeItemProperty, 3000)
})

//Task 3-b
const firstInput = document.querySelector('#first-input')
const secondInput = document.querySelector('#second-input')
let timeOutForInput
function fullFillSecondInput(time) {
  return function () {
    timeOutForInput = setTimeout(() => {
      secondInput.value = firstInput.value
    }, time)
  }
}

firstInput.addEventListener('keyup', fullFillSecondInput(1000))
firstInput.addEventListener('keydown', () => {
  clearTimeout(timeOutForInput)
})
