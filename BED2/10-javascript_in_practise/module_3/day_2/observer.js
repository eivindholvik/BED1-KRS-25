class Dummy {
    constructor(name) {
        this.name = name;
        this.observers = new Set();
    }
    notify(event) {
        for (const obs in this.observers) {
            obs.update(event);
        }
    }

    changeName(newName) {
        this.name = newName;
        this.notify(this.name);
    }

    subscribe(observer) {
        this.observers.add(observer);
    }

    unsubscribe(observer) {
        this.observers.delete(observer);
    }
}

class WantToKnow {
    constructor(name) {
        this.name = name;
    }
    update(event) {
        console.log(event);
    }
}
