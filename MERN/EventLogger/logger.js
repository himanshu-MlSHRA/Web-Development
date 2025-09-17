const os = require("os");
const fs = require("fs");
const EventEmitter= require("event");  // EventEmitter means throwing out a message

class Logger extends EventEmitter {
    log(message) {
        this.emit ("Message", {message})
    }
}

const logger = new Logger()
const logFile = "./eventlog.txt"

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message}\n)}`
    fs.appendFileSync(logFile, logMessage) 
} 

logger.on("Message", logToFile)

setInterval(() => {
    const memoryUsage= os.freemem() / os.totalmem () * 100
    logger.log(`Current ,memory usage: ${memoryUsage.toFixed(2)}`)
}, 3000);

logger.log("Application started");
logger.log("Application event occurred");