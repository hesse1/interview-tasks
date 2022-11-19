import './App.scss';
import { observer } from 'mobx-react-lite'; // Or "mobx-react".
import { useEffect } from 'react';
import store from './store/store';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="#e74c3c"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#c0392b"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

const Product = observer(() => {
  const { productId } = useParams();

  useEffect(() => {
    store.getProductById(productId);
  }, [productId]);

  return (
    <>
      {store.isLoading && <Spinner />}

      {store.isError && (
        <div className="button" onClick={() => store.getProductById(productId)}>
          <div className="button__warn">Произошла ошибка!</div>
          <div className="button__request">Повторить запрос</div>
        </div>
      )}

      {!store.isLoading && (
        <div>
          <h3>{store.product?.name}</h3>
          <div>{store.product?.content}</div>
        </div>
      )}
    </>
  );
});

const ProductList = observer(() => (
  <>
    {store.isLoading && <Spinner />}

    {!store.isLoading &&
      store.products?.map((product) => (
        <li style={{ padding: '10px 0' }} key={product.id}>
          <Link key={product.id} to={`/${product.id}`}>
            {product.name}
          </Link>
        </li>
      ))}
  </>
));

const App = observer(() => {
  useEffect(() => {
    store.getProductsList();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<ProductList />} />

        <Route path="/:productId" element={<Product />} />
      </Routes>
    </>
  );
});

export default App;
