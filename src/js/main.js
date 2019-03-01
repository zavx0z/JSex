import {delayedLog} from "./delayedLog"

const arr = [1, 2, 3]

let processArray = async (array) => {
    const promises = array.map(delayedLog)
    await Promise.all(promises);
    console.info("Я тут ждал разрешения всех промисов")
}

processArray(arr).catch((error) => console.error(error))
console.info("Я не жду, ведь я синхронный")