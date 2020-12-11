let dataset1 = []
let dataset2 = []

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function generateData() {
    let n = 0

    while (n <= 1000) {
        n++
        let randomizedVal = getRandomInt(1000)

        dataset1.push(randomizedVal)
        dataset2.push(randomizedVal)
    }
    console.log(dataset1)
}

function getMinMax() {
    let min = dataset1[0],
        max = dataset1[0]
    for (let element of dataset1) {
        if (element < min) {
            min = element
        }
        if (element > max) {
            max = element
        }
    }
    let alternateMin = Math.min(...dataset1),
        alternateMax = Math.max(...dataset1)
    console.log(min, max, alternateMin, alternateMax)
}

function getMedian() {
    let sortedData = dataset1.sort()
    let mid = Math.ceil(sortedData.length / 2)
    let median = sortedData.length % 2 === 0 ? (sortedData[mid] + sortedData[mid - 1]) / 2 : sortedData[mid - 1]
    console.log(median)
}

function swap(arr, left, right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

function split(arr, left, right) {
    let pivot = arr[Math.floor(Math.random() * (right - left + 1) + left)]

    while (left <= right) {
        while (arr[left] < pivot) {
            left++
        }
        while (arr[right] > pivot) {
            right--
        }
        if (left <= right) {
            swap(arr, left, right)
            left++
            right--
        }
    }
    return left
}

function qSortRecursive(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        const position = split(arr, left, right)
        if (left < position - 1) qSortRecursive(arr, left, position - 1)
        if (position < right) qSortRecursive(arr, position, right)
    }
    return arr
}

function getTags() {
    let tags = [];
    for (let node of Array.from(document.getElementsByTagName('*'))) {
        tags.push(node.tagName);
    }

    let dict = new Map()
    for (let item of tags) {

        if (!dict.has(item))
            dict.set(item, 0)

        dict.set(item, dict.get(item) + 1)
    }

    console.log(dict)
}

function engage() {
    generateData()
    getMinMax()
    getMedian()
    console.log(dataset2)
    console.log(qSortRecursive(dataset2))
    getTags()
}

function showWindow() {
    let dialog = document.querySelector('dialog')
    document.querySelector('#writeMeButton').onclick = function() {
        dialog.show()
    };
}
function closeWindow() {
    let dialog = document.querySelector('dialog')
    document.querySelector('#close').onclick = function() {
        dialog.close()
    };
}

let images = ["assets/images/testImg.png", "assets/images/003d061f74e6a023b30cdc7bc6467ba6 1.png", "assets/images/photo_2020-09-08 14.19.30.png", "assets/images/PQC4987.png", "assets/images/peon_portrait.png"]

function changeAvatar() {
    document.getElementById('avaId').src = images[getRandomInt(4)]
    console.log(images[0])
}





