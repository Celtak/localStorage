function Storage(nameStorage, init) {

    this.nameStorage = nameStorage;

    if (localStorage.getItem(nameStorage) === null) {

        localStorage.setItem(nameStorage, init);

        a = nameStorage;

        console.warn('Initialization: ' + nameStorage + ' with ' + init);


    } else {

        console.warn('No Initialization because ' + nameStorage + ' is already used!');

    }

    this.load = function () {

        return localStorage.getItem(this.nameStorage);

    }

    this.update = function (data) {


        localStorage.setItem(nameStorage, data);

        console.warn('Update: ' + nameStorage);


    }

}
