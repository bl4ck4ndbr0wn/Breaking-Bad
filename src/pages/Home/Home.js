import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux';
import {characterActions} from '../../_store/actions/character.actions';
import CharacterFeed from '../../components/Character/CharacterFeed';


const PER_PAGE = 10;

const Home = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState('Breaking Bad');

  const dispatch = useDispatch();
  const {characters} = useSelector((state) => state);

  useEffect(() => {
    dispatch(characterActions.fetchAll(0));
  }, [dispatch]);

  function handlePageClick({selected: selectedPage}) {
    setCurrentPage(selectedPage);
  }

  function getCurrentPageData(data) {
    const offset = currentPage * PER_PAGE;

    return <CharacterFeed
      characters={filterDataByCategory(data).slice(offset, offset + PER_PAGE)}
    />;
  }

  const pageCount = !characters.loading ? Math.ceil(filterDataByCategory(characters.data).length / PER_PAGE) : 0;

  function handleCategoryChange(e) {
    setCurrentPage(0);
    setCategory(e.target.value);
  }

  function filterDataByCategory(data) {
    return data.filter((feed) => feed.category.indexOf(category) > -1);
  }

  return (
    <>
      <main className="mb-auto my-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-row justify-between">
            <div className="">
              <h3 className="text-gray-700 text-2xl sm:text-xl font-medium">Characters</h3>
              <span
                className="mt-3 text-sm text-gray-500">{!characters.loading ? characters.data.length : 0} Actors</span>
            </div>
            <div className="mt-1 relative">
              <h3 className="text-gray-700 text-2xl sm:text-xl font-medium">Select a Category</h3>
              <select
                value={category}
                onChange={(e) => handleCategoryChange(e)}
                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="Breaking Bad">Breaking Bad</option>
                <option value="Better Call Saul">Better Call Saul</option>
              </select>
            </div>
          </div>

          <div
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">

            {characters.loading ?
              new Array(4).fill(
                <div className="w-full max-w-sm mx-auto overflow-hidden">
                  <div className="p-4">
                    <div className="h-full border-2 border-gray-100 rounded-lg overflow-hidden">
                      <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"/>
                      <div className="p-6">
                        <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500">.</h1>
                        <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2">.</h2>
                      </div>
                    </div>
                  </div>
                </div>,
              ) :
              getCurrentPageData(characters.data)
            }
          </div>

          <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            forcePage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center items-center rounded-md my-8'}
            previousLinkClassName={'py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white focus:outline-none'}
            nextLinkClassName={'py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white focus:outline-none'}
            pageLinkClassName={'py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white focus:outline-none'}
            disabledClassName={'opacity-70 focus:outline-none'}
            activeLinkClassName={'leading-tight bg-gray-400 text-white border border-gray-200 border-r-0 hover:bg-blue-500 hover:text-white focus:outline-none'}
          />

        </div>
      </main>
    </>
  )
    ;
};

export default Home;

//<div className="flex justify-center">
// <div className="flex rounded-md mt-8">
// <button
//       className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white">
//       <span>Previous</span>
//     </button>
//     <button
//       className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
//       <span>1</span>
//     </button>
//     <button
//       className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
//       <span>2</span>
//     </button>
//     <button
//       className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
//       <span>3</span>
//     </button>
//     <button
//       className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white">
//       <span>Next</span>
//     </button>
/*  </div>*/

/*</div>*/
