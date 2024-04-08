let SortingLibrary = (function () {
    function SortingLibrary() { }

    function isUndefined(element) {
        return element === undefined;
    }

    function handleUndefinedElements(array) {
        if (array.some(isUndefined)) {
            console.log("Warning: Array contains undefined elements. Sorting may produce unexpected results.");
        }
    }

    // Функція для обмінного сортування
    SortingLibrary.exchangeSort = function (array, order) {
        handleUndefinedElements(array);
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (!isUndefined(array[i]) && !isUndefined(array[j])) {
                    comparisons++;
                    if ((order === 'asc' && array[i] > array[j]) || (order === 'desc' && array[i] < array[j])) {
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                        swaps++;
                    }
                }
            }
        }
        console.log("Exchange sort: Comparisons - " + comparisons + ", Swaps - " + swaps);
        return array;
    };

    // Функція для сортування методом мінімального елемента
    SortingLibrary.selectionSort = function (array, order) {
        handleUndefinedElements(array);
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (!isUndefined(array[j])) {
                    comparisons++;
                    if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
                        minIndex = j;
                    }
                }
            }
            if (minIndex !== i && !isUndefined(array[i]) && !isUndefined(array[minIndex])) {
                let temp = array[i];
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
        handleUndefinedElements(array);
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && !isUndefined(array[j]) && ((order === 'asc' && array[j] > key) || (order === 'desc' && array[j] < key))) {
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

    // Функція для сортування методом Шелла
    SortingLibrary.shellSort = function (array, order) {
        handleUndefinedElements(array);
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j = i;
                while (j >= gap && !isUndefined(array[j - gap]) && ((order === 'asc' && array[j - gap] > temp) || (order === 'desc' && array[j - gap] < temp))) {
                    comparisons++;
                    array[j] = array[j - gap];
                    j -= gap;
                    swaps++;
                }
                array[j] = temp;
            }
        }
        console.log("Shell sort: Comparisons - " + comparisons + ", Swaps - " + swaps);
        return array;
    };

    // Функція для сортування методом Хоара (швидке сортування)
    SortingLibrary.quickSort = function (array, order) {
        handleUndefinedElements(array);
        function partition(array, low, high) {
            let pivot = array[Math.floor((low + high) / 2)];
            let i = low - 1;
            let j = high + 1;
            while (true) {
                do {
                    i++;
                    comparisons++;
                } while (!isUndefined(array[i]) && ((order === 'asc' && array[i] < pivot) || (order === 'desc' && array[i] > pivot)));
                do {
                    j--;
                    comparisons++;
                } while (!isUndefined(array[j]) && ((order === 'asc' && array[j] > pivot) || (order === 'desc' && array[j] < pivot)));
                if (i >= j) return j;
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                swaps++;
            }
        }

        function quickSortHelper(array, low, high) {
            if (low < high) {
                let partitionIndex = partition(array, low, high);
                quickSortHelper(array, low, partitionIndex);
                quickSortHelper(array, partitionIndex + 1, high);
            }
        }

        let comparisons = 0;
        let swaps = 0;
        quickSortHelper(array, 0, array.length - 1);
        console.log("Quick sort: Comparisons - " + comparisons + ", Swaps - " + swaps);
        return array;
    };

    return SortingLibrary;
})();