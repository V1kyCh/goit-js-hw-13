const delay = ms => {
    return new Promise((resolve) => {
        let timer = 0
        const interval = setInterval(() => {
            timer++
            if (timer === ms) {
                clearInterval(interval)
                resolve(ms)
            } 
        }, 1)
    })
   
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms