const tahoe = {
    mountains: ['Cat', 'Tỏi', 'Luận', 'Tanh', 'Điền'],
    prints: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(', '));
        }, delay);
    }
}

tahoe.prints();