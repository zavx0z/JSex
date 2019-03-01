import {delayedLog} from "./delayedLog"

const arr = [1, 2, 3]

const processArray = async (array) => {
    for (const item of array)
        await delayedLog(item)
    console.info("Я тут ждал разрешения всех промисов")
}

processArray(arr).catch((error) => console.error(error))
console.info("Я не жду, ведь я синхронный")