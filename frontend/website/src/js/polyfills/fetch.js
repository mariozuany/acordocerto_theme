export default () => {
    if (!window.hasOwnProperty('fetch')) {
        window.fetch = function fetch(url, opts) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = Boolean(opts.credentials);
                xhr.open(opts.method || 'GET', url);
                for (var k in opts.headers)
                    xhr.setRequestHeader(k, opts.headers[k]);
                xhr.onload = function(e) {
                    resolve({
                        status: e.target.status,
                        headers: {get: function(name) {return e.target.getResponseHeader(name)}},
                        arrayBuffer: function(){ return Promise.resolve(e.target.response)},
                        blob: function(){ return Promise.resolve(new Blob([e.target.response], {type: e.target.getResponseHeader('Content-Type')}))},
                        text: function(){ return Promise.resolve(e.target.responseText)},
                        json: function(){ return Promise.resolve(JSON.parse(e.target.responseText))}
                    });
                };
                xhr.onerror = reject;
                xhr.send(opts.body);
            });
        };
    }
}
