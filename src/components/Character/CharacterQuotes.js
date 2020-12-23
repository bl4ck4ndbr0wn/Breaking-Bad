import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux';
import {quotesActions} from '../../_store/actions/quotesActions';


const PER_PAGE = 9;

const CharacterQuotes = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const {character} = props;
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(quotesActions.fetchByAuthor(character.name));
  }, [dispatch, character.name]);

  function handlePageClick({selected: selectedPage}) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const pageCount = !loading ? Math.ceil(data.length / PER_PAGE) : 0;

  return (
    <>
      <div className="my-2 bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
          {loading ?
            new Array(3).fill((
              <div className="w-full mx-2 rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
                   style={{maxWidth: '500px'}}>
                <div className="h-full justify-center items-center  overflow-hidden">
                  <div
                    className="lg:h-30 rounded-full  bg-gray-400 md:h-20 w-20 md:w-20 object-cover object-center"/>
                  <div className="p-6">
                    <h1 className="w-full mb-4 h-6 animate-pulse bg-gray-500">.</h1>
                    <h2 className="bg-gray-400 animate-pulse h-4 w-1/2 mb-2">.</h2>
                  </div>
                </div>
              </div>
            )) :
            data.length > 0 ?
              data.slice(offset, offset + PER_PAGE).map((quote) => (
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
                     style={{maxWidth: '500px'}}
                     key={quote.quote_id}
                >
                  <div className="w-full mb-10">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                    <p className="text-sm text-gray-600 text-center px-5">{quote.quote}</p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                  </div>
                  <div className="w-full">
                    <p className="text-md text-indigo-500 font-bold text-center">{quote.author}</p>
                    <p className="text-xs text-gray-500 text-center">{quote.series}</p>
                  </div>
                </div>
              )) :
              <p className="text-md text-indigo-500 font-bold text-center">"No Quotes by the character"</p>
          }
        </div>
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
    </>
  );
};

CharacterQuotes.defaultProps = {
  character: {},
};

CharacterQuotes.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterQuotes;