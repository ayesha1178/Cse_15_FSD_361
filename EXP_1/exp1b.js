import EventEmitter from 'events';

class Button extends EventEmitter {
    click() {
        console.log('Button clicked');
        this.emit('click');
    }
}

const button = new Button();

button.on('click', () => {
    console.log('Click event handled');
});

button.click();