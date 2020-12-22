import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {characterActions} from '../../_store/actions/character.actions';
import CharacterFeed from '../../components/Character/CharacterFeed';


const Home = (props) => {
  const dispatch = useDispatch();
  const {characters} = useSelector((state) => state);

  useEffect(() => {
    dispatch(characterActions.fetchAll(0));
  }, [dispatch]);

  console.log(characters);
  return (
    <>
      <main className="mb-auto my-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-row justify-between">
            <div className="">
              <h3 className="text-gray-700 text-2xl sm:text-xl font-medium">Wrist Watch</h3>
              <span className="mt-3 text-sm text-gray-500">200+ Products</span>
            </div>
            <div className="">
              <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
              <span className="mt-3 text-sm text-gray-500">200+ Products</span>
            </div>
          </div>
          <CharacterFeed
            characters={characters.data}
            currentPage={characters.currentPage}

          />

          <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
              <button
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white">
                <span>Previous</span>
              </button>
              <button
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
                <span>1</span>
              </button>
              <button
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
                <span>2</span>
              </button>
              <button
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
                <span>3</span>
              </button>
              <button
                className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white">
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;