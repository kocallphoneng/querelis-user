// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const List = (props) => {
  // Yоur cоdе gоеs hеrе

  const shuffle = (letter) => {
    if (!letter) {
      return props.items;
    } else {
      let filter = props.items.filter((f) => f !== letter);
      const newArr = filter.push(letter).reverse();
      return newArr;
    }
  };
  const arr = shuffle();
  return (
    <ul>
      {arr.map((l, n) => (
        <li key={n} onClick={() => shuffle(l)}>
          {l}
        </li>
      ))}
    </ul>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[2];
if (listItem) {
  listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));
