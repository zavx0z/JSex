const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 300));
}

export async function delayedLog(item) {
    await delay()
    console.log(item)
}