const Viall = require('viall');

function LiquidCache() {

    const cache = new Viall();
    const options = {
        debug: false,
        deletionInterval: 0
    };

    this.deleteInterval = function() {
        let that = this;
        setInterval(function() {
            that.removeAll();
        }, options.deletionInterval);
    }

    this.settings = function(values = {}) {
        
        Object.keys(values).map((v, i) => {
            if (options.hasOwnProperty(v)) options[v] = values[v];
            this.debug(`Updated setting: ${v} => ${values[v]}`);
        });
        if (options.deletionInterval != 0) {
            this.debug('Starting auto deletion interval');
            this.deleteInterval();
        }
    }
    
    this.getSettings = function() {
        return options;
    }

    this.set = function(key, value, time) {
        if (!key) return new Error('You must provide a key');
        if (!value) return new Error('You must provide a value');

        if (time === undefined) {
            this.debug(`Setting value for key "${key}"`);
            cache.set(key, value);
            return;
        }
        
        if (isNaN(time)) return new Error('You did not provide a valid time. Must be a valid number');
        
        cache.set(key, value);
        this.debug(`Setting value for key "${key}"`);
        this.debug(`The time for key "${key}" is ${time}`);

        let that = this;
        setTimeout(function() {
            that.remove(key);
        }, time)
        
    }

    this.setMany = function(keys = [], values = []) {
        if (!Array.isArray(keys) || !Array.isArray(values)) return new Error(`Keys and values must be an array`);
        if (keys.length !== values.length && values.length !== 1) return new Error(`You must provide an equal amount of keys and values`);
        if (!keys.length) return new Error(`You must provide keys and values`);
        if (keys.length === 1) this.debug(`It's recommended to use the ".set()" method for single keys`);

        if (values.length === 1) {
            for (let i = 0; i < keys.length; i++) {
                this.set(keys[i], values[0]);
            }
            return;
        }

        keys.map((k, v) => {
            this.set(keys[v], values[v]);
        });
        return;
    }

    this.get = function(key) {
        if (!key) return new Error('You must provide a key');
        let response = cache.get(key);
        if (!response) this.debug(`The key "${key}" doesn't exist or it doesn't have a value.`) 
        return response;
    }

    this.remove = function(key) {
        this.debug(`Removed key "${key}"`);
        return cache.delete(key)
    }

    this.getMany = function(keys = []) {
        if (!Array.isArray(keys)) return new Error(`Keys must be an array`);
        if (!keys.length) return new Error(`You must provide keys`);
        if (keys.length === 1) this.debug(`It's recommended to use the ".get()" method for single keys`);
  
        let values = [];
        let response;

        for (let i = 0; i < keys.length; i++) {
            response = this.get(keys[i]);
            values.push(response)
        }  
  
        return values;
    }

    this.removeMany = function(keys = [], interval) {
        if (!Array.isArray(keys)) return new Error(`Keys must be an array`);
        if (!keys.length) return new Error(`You must provide keys`);
        if (keys.length === 1) this.debug(`It's recommended to use the ".remove()" method for single keys`);

        if (!interval) {
            for (let i = 0; i < keys.length; i++) {
                this.remove(keys[i])
            }
            return;
        }  

        if (isNaN(time)) return new Error('You did not provide a valid time. Must be a valid number');
        
        for (let i = 0; i < keys.length; i++) {
            this.remove(keys[i])

            let that = this;
            setInterval(function() {
                that.remove(keys[i]);
            }, interval)
        }
        this.debug(`The deletion interval for key "${key}" is "${interval}"`);
    }
 
    this.getAll = function() {
        this.debug(`Getting all keys`);
        return cache.entries();
    }

    this.size = function() {
        this.debug(`There are ${cache.size()} keys`);
        return cache.size();
    }

    this.removeAll = function() {
        cache.clear();
        this.debug('Clearing entire cache');
    }

    this.debug = function(message) {
        if (options.debug) return console.log(`[DEBUG] -> ${message}`);
    }

}

module.exports = new LiquidCache();
module.exports.LiquidCache = LiquidCache;