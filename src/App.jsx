import { useState } from 'react';

function App() {
  const [itemInput, setItemInput] = useState('');
  const [unsortedArr, setUnsortedArr] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);

  const changeValue = (e) => {
    setItemInput(e.target.value);
  };

  const addToArr = (e) => {
    e.preventDefault();
    if (itemInput !== '') {
      setUnsortedArr([...unsortedArr, itemInput]);
      setItemInput('');
    }
  };

  const bubbleSort = (arr) => {
    let arrL = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arrL - 1; i++) {
        if (Number(arr[i]) > Number(arr[i + 1])) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      arrL--;
    } while (swapped);
    return arr;
  };

  const sortArr = () => {
    let workArr = [...unsortedArr];
    setSortedArr([...bubbleSort(workArr)]);
  };

  const clearHandler = () => {
    setItemInput('');
    setUnsortedArr([]);
    setSortedArr([]);
  };

  return (
    <>
      <h1>Simple Sorting</h1>

      <main>
        <form>
          <label htmlFor="arrayElement">Type a number:</label>
          <input type="number" id="arrayItem" value={itemInput} onChange={changeValue} onSubmit={addToArr} />
          <button type="submit" onClick={addToArr}>
            Add to array
          </button>
        </form>

        <div className="array-box">
          <h2>Unsorted Array</h2>
          <p>[{unsortedArr.join(', ')}]</p>
        </div>

        <button className="btn-long" onClick={sortArr}>
          SORT!
        </button>

        <div className="array-box">
          <h2>Sorted Array</h2>
          <p>[{sortedArr.join(', ')}]</p>
        </div>

        {sortedArr.length > 0 ? (
          <button className="btn-long" onClick={clearHandler}>
            CLEAR
          </button>
        ) : (
          ''
        )}
      </main>
    </>
  );
}

export default App;
