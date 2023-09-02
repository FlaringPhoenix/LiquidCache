function LiquidCache() {

    const cache = new Map();
    const interval = 0;

    this.deleteInterval = function() {
        let that = this;
        setInterval(function() {
            that.removeAll();
        }, interval);
    }

    this.setInterval = function(interval) {
        if (isNaN(interval)) return new Error('You must provide a number')
        this.interval = interval;
    }

    this.set = function(key, value, time) {
        if (!key) return new Error('You must provide a key');
        if (!value) return new Error('You must provide a value');

        cache.set(key, value);
        if (!isNaN(time)) {
            let that = this;
            setTimeout(function() {
                that.remove(key);
            }, time);
        }
    }

    this.get = function(key) {
        if (!key) return new Error('You must provide a key');
        return cache.get(key);
    }

    this.remove = function(key) {
        return cache.delete(key);
    }
 
    this.getAll = function() {
        return Array.from(cache.entries());
    }

    this.removeAll = function() {
        cache.clear();
    }

}

module.exports = new LiquidCache();
module.exports.LiquidCache = LiquidCache;