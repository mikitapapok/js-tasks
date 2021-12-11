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

Array.prototype.myReduce = function (callback) {
  if (this == null) {
    throw new TypeError('Array.prototype.reduce called on null or undefined')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }
  var acc
  var i = 0
  if (arguments.length >= 2) {
    acc = arguments[1]
  } else {
    while (i < this.length && !(i in this)) {
      i++
    }
    if (i >= this.length) {
      throw new TypeError('Reduce of empty array with no initial value')
    }
    acc = this[i++]
  }
  for (; i < this.length; i++) {
    if (i in this) {
      acc = callback(acc, this[i], i, this)
    }
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
