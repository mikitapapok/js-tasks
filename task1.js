var notes = [
  {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: [],
  },
]

Array.prototype.myMap = function (callback) {
  var resultArr = []
  if (this.length) {
    for (var i = 0; i < this.length; i++) {
      resultArr.push(callback(this[i], i, this))
    }
  }
  return resultArr
}
Array.prototype.myFilter = function (callback) {
  var result = []
  if (this.length) {
    for (var i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i])
      }
    }
  }
  return result
}

Array.prototype.myReduce = function (callback, container) {
  var acc
  if (typeof container !== 'undefined') {
    acc = container
  } else {
    acc = this[0]
  }
  console.log(acc)
  for (var i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }

  return acc
}

var firstReult = notes.myMap((element) => {
  return { id: element.id, title: element.title }
})
var secondResult = notes.myFilter((e) => e.isMarked === true)
var thirdResult = notes.myReduce(
  (accumulator, element) => accumulator + element.pagesCount,
  0,
)

console.log(firstReult)
console.log(secondResult)
console.log(thirdResult)
