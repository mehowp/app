module.exports = function() {
    var $transport = this;
    $transport.data = [];
    $transport.stash = [];

    // get item from transport service
    // (set stash to true if u want tu see if item has been deleted)
    $transport.get = function(key, stash) {
        if (stash) {
            return $transport.stash[key];
        } else {
            return $transport.data[key];
        }
    }

    // store data
    $transport.set = function(key, data) {
        $transport.data[key] = data;
    }

    // delete data by key and move it to stash for rescue
    $transport.unset = function(key) {
        var isKey = $transport.data.hasOwnProperty(key);

        if (!isKey) {
            return;
        }
        
        $transport.stash[key] = $transport.data[key];
        delete $transport.data[key];
    }


    return $transport;
}
