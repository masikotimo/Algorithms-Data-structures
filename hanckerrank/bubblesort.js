const items = `3 2 1`

function bubblesort(items = [2, 5, 1, 3, 4]) {
    const length = items.length;
    let swaps=0
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length - i - 1); j++) {
        if (items[j] > items[j + 1]) {
          [items[j], items[j + 1]] = [items[j + 1], items[j]];
            swaps++
        }
      }
    }
    console.log("Array is sorted in " + swaps + " swaps.")
    console.log("First Element: " + items[0])
    console.log("Last Element: " + items[length-1])

    return items;
  };

a = items.split(' ');
a = a.map(Number);
console.log(bubblesort(a))