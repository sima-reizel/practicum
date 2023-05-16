import { useDispatch, useSelector } from "react-redux";
import { fetchAllImages } from './features/imageSlice';
import { useEffect, useState, useTransition } from "react";

export default function Image() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    startTransition(() => {
      setError(null);
    });

    dispatch(fetchAllImages())
      .then(() => {
        startTransition(() => {});
      })
      .catch(error => {
        setError(error.message);
      });
  }, [dispatch, startTransition]);

  const imageArr = useSelector(state => state.image.imageArr);

  return (
    <>
      {isPending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Data:</h2>
          {imageArr &&
            imageArr.map(item => (
              <div key={item.id}>{item.url}</div>
            ))}
        </>
      )}
    </>
  );
}