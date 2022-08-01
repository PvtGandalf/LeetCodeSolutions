/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    // Get the value associated with the key
    get(key) {
        
        // If the key isn't found return -1
        if (!this.map.has(key)) {
            return -1;
        }
        
        // Get the value associated with the key
        const val = this.map.get(key);
        
        // Delete the original key/value pair
        this.map.delete(key);
        
        // Add the updated key/value pair to the cache
        this.map.set(key, val);
        
        // Return the value
        return val;
    }

    // Update the value associated with the key
    put(key, value) {
        
        // Delete the original key/value pair
        this.map.delete(key);
        
        // Add the updated key/value pair to the cache
        this.map.set(key, value);
        
        // If the # of keys is larger than the cache capacity
        if (this.map.size > this.capacity) {
            
            // Get the least used key/value pair (first item in cache)
            const firstItem = this.map.keys().next().value;
            
            // Remove the least used key/value pair
            this.map.delete(firstItem);
        }
    }
}
