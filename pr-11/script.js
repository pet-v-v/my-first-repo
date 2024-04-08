window.onload = function () {
    let sparseArray = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            sparseArray[i] = i + 1;
        }
    }
    console.log("Original sparse array:");
    console.log(sparseArray);

    console.log("\nSorting using Exchange Sort:");
    let sortedArrayExchangeAsc1 = SortingLibrary.exchangeSort(sparseArray.slice(), 'asc');
    let sortedArrayExchangeDesc1 = SortingLibrary.exchangeSort(sparseArray.slice(), 'desc');

    console.log("\nSorting using Selection Sort:");
    let sortedArraySelectionAsc1 = SortingLibrary.selectionSort(sparseArray.slice(), 'asc');
    let sortedArraySelectionDesc1 = SortingLibrary.selectionSort(sparseArray.slice(), 'desc');

    console.log("\nSorting using Insertion Sort:");
    let sortedArrayInsertionAsc1 = SortingLibrary.insertionSort(sparseArray.slice(), 'asc');
    let sortedArrayInsertionDesc1 = SortingLibrary.insertionSort(sparseArray.slice(), 'desc');

    console.log("\nSorting using Shell Sort:");
    let sortedArrayShellAsc1 = SortingLibrary.shellSort(sparseArray.slice(), 'asc');
    let sortedArrayShellDesc1 = SortingLibrary.shellSort(sparseArray.slice(), 'desc');

    console.log("\nSorting using Quick Sort:");
    let sortedArrayQuickAsc1 = SortingLibrary.quickSort(sparseArray.slice(), 'asc');
    let sortedArrayQuickDesc1 = SortingLibrary.quickSort(sparseArray.slice(), 'desc');

    console.log("---------------------------------------------");

    let denseArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
    console.log("Original dense array:");
    console.log(denseArray);

    console.log("\nSorting using Exchange Sort:");
    let sortedArrayExchangeAsc2 = SortingLibrary.exchangeSort(denseArray.slice(), 'asc');
    let sortedArrayExchangeDesc2 = SortingLibrary.exchangeSort(denseArray.slice(), 'desc');

    console.log("\nSorting using Selection Sort:");
    let sortedArraySelectionAsc2 = SortingLibrary.selectionSort(denseArray.slice(), 'asc');
    let sortedArraySelectionDesc2 = SortingLibrary.selectionSort(denseArray.slice(), 'desc');

    console.log("\nSorting using Insertion Sort:");
    let sortedArrayInsertionAsc2 = SortingLibrary.insertionSort(denseArray.slice(), 'asc');
    let sortedArrayInsertionDesc2 = SortingLibrary.insertionSort(denseArray.slice(), 'desc');

    console.log("\nSorting using Shell Sort:");
    let sortedArrayShellAsc2 = SortingLibrary.shellSort(denseArray.slice(), 'asc');
    let sortedArrayShellDesc2 = SortingLibrary.shellSort(denseArray.slice(), 'desc');

    console.log("\nSorting using Quick Sort:");
    let sortedArrayQuickAsc2 = SortingLibrary.quickSort(denseArray.slice(), 'asc');
    let sortedArrayQuickDesc2 = SortingLibrary.quickSort(denseArray.slice(), 'desc');
};
