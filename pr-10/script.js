window.onload = function () {
    // Генеруємо масив з 100 випадкових цілих чисел від 1 до 1000
    var array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);

    console.log("Original array:");
    console.log(array);

    // Викликаємо всі три функції сортування на цьому масиві
    console.log("\nSorting using Exchange Sort:");
    var sortedArrayExchangeAsc = SortingLibrary.exchangeSort(array.slice(), 'asc');
    var sortedArrayExchangeDesc = SortingLibrary.exchangeSort(array.slice(), 'desc');

    console.log("\nSorting using Selection Sort:");
    var sortedArraySelectionAsc = SortingLibrary.selectionSort(array.slice(), 'asc');
    var sortedArraySelectionDesc = SortingLibrary.selectionSort(array.slice(), 'desc');

    console.log("\nSorting using Insertion Sort:");
    var sortedArrayInsertionAsc = SortingLibrary.insertionSort(array.slice(), 'asc');
    var sortedArrayInsertionDesc = SortingLibrary.insertionSort(array.slice(), 'desc');
};
