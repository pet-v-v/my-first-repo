var SortingLibrary = (function () {
    function SortingLibrary() { }

    // Функція для обмінного сортування
    SortingLibrary.exchangeSort = function (array, order) {
        var comparisons = 0;
        var swaps = 0;
        var n = array.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = i + 1; j < n; j++) {
                comparisons++;
                if ((order === 'asc' && array[i] > array[j]) || (order === 'desc' && array[i] < array[j])) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    swaps++;
                }
            }
        }
        console.log("Exchange sort: Comparisons - " + comparisons + ", Swaps - " + swaps);
        return array;
    };

    // Функція для сортування методом мінімального елемента
    SortingLibrary.selectionSort = function (array, order) {
        var comparisons = 0;
        var swaps = 0;
        var n = array.length;
        for (var i = 0; i < n - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < n; j++) {
                comparisons++;
                if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                var temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                swaps++;
            }
        }
        console.log("Selection sort: Comparisons - " + comparisons + ", Swaps - " + swaps);
        return array;
    };

    // Функція для сортування вставками
    SortingLibrary.insertionSort = function (array, order) {
        var comparisons = 0;
        var swaps = 0;
        var n = array.length;
        for (var i = 1; i < n; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && ((order === 'asc' && array[j] > key) || (order === 'desc' && array[j] < key))) {
                comparisons++;
                array[j + 1] = array[j];
                j = j - 1;
                swaps++;
            }
            array[j + 1] = key;
        }
        console.log("Insertion sort: Comparisons - " + comparisons + ", Swaps - " + swaps);
        return array;
    };

    return SortingLibrary;
})();
