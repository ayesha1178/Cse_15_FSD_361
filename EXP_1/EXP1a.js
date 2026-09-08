class EventEmitter {         // EventEmitter class to handle events
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener());
        }
    }
}

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello!");
});

emitter.on("exit", () => {
    console.log("Exiting program...");
});

emitter.emit("greet");
emitter.emit("exit");