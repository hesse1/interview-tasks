import './App.scss';

const mockData = [
  {
    id: 1,
    header: 'Заголовок 1',
    options: [
      'элемент списка 1',
      'элемент списка 2',
      'элемент списка 3',
      'элемент списка 4',
      'элемент списка 5',
    ],
    text: 'какой-то текст 1 текст какой-то 1 какой-то какой-то текст 1 текст какой-то 1 какой-то какой-то текст 1 текст какой-то 1 какой-то',
  },
  {
    id: 2,
    header: 'Заголовок 2',
    options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3'],
    text: 'какой-то текст 2 какой-то текст 2 какой-то текст 2 какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2какой-то текст 2',
  },
  {
    id: 3,
    header: 'Заголовок 3',
    options: ['элемент списка 1', 'элемент списка 2'],
    text: 'какой-то текст 3 какой-то текст 3 какой-то текст 3',
  },
];

function App() {
  return (
    <ul className="wrap">
      {mockData.map((item) => (
        <Component data={item} key={item.id} />
      ))}
    </ul>
  );
}

function Component({ data }) {
  return (
    <li className="wrap__item">
      <div>
        <h1 className="wrap__title">{data.header}</h1>

        <ul className="options">
          {data.options?.map((option, index) => (
            <ItemOption option={option} key={index} />
          ))}
        </ul>

      </div>
      <div className="text">{data.text}</div>
    </li>
  );
}

function ItemOption({ option }) {
  return <li className="options__item">{option}</li>;
}

export default App;
