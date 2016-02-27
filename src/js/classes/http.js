export default class Http {
    fetch() {
        let promise = new Promise((resolve, reject) => {
                let client = new XMLHttpRequest();

                // Change to location.origin on launch
                client.open('GET', window.location + 'posts.php', true);
                client.send();

                client.onload = function() {

                    if (this.status == 200) {

                        resolve(JSON.parse(this.response));

                    } else {

                        reject(this.statusText);

                    }
                };

                client.onerror = function() {

                    reject(this.statusText);

                };

            });

        return promise;
    }
}
