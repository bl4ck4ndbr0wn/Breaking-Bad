import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {characterActions} from '../../../_store/actions/character.actions';
import CharacterInfo from '../../../components/Character/CharacterInfo';
import CharacterQuotes from '../../../components/Character/CharacterQuotes';


const CharacterDescription = (props) => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector((state) => state.characters);

  useEffect(() => {
    const {id} = props.match.params;
    if (!id) props.history.push('/');
    dispatch(characterActions.fetchById(id));
  }, [dispatch, props.history, props.match.params]);

  return (
    <>
      <main className="mb-auto my-8">
        <div className="container w-full flex px-6 flex-wrap mx-auto">
          <div className="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
            <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
            <div className="block lg:hidden sticky inset-0">
              <button id="menu-toggle"
                      className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none">
                <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </button>
            </div>
            <div
              className="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
              style={{top: '6em'}} id="menu-content">
              <ul className="list-reset py-2 md:py-0">
                <li
                  className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
                  <a href="#section1"
                     className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                    <span className="pb-1 md:pb-0 text-sm">General Information</span>
                  </a>
                </li>
                <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                  <a href="#section2"
                     className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                    <span className="pb-1 md:pb-0 text-sm">Quotes</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <section className="w-full lg:w-4/5">
            <h2 id="section1" className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
              Character
            </h2>
            <div className="p-4 mt-6 lg:mt-0 leading-normal rounded shadow-md bg-gray-100">
              <div className="flex flex-row">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                  {loading ?
                    <div className="h-full  overflow-hidden ">
                      <div
                        className="lg:h-40 rounded-full  bg-gray-400 md:h-30 w-40 md:w-30 object-cover object-center"/>
                      <div className="p-6">
                        <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500">.</h1>
                        <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2">.</h2>
                      </div>
                    </div> : data.length > 0 ?
                      <CharacterInfo character={data[0]}/>
                      : 'No data found.'
                  }

                </div>
              </div>
            </div>

            <hr className="bg-gray-300 my-12"/>

            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Quotes</h2>
            <div id="section2" className="p-8 mt-6 lg:mt-0 rounded shadow-md bg-gray-100">
              {!loading && data.length > 0 && (<CharacterQuotes character={data[0]}/>)}
            </div>

          </section>

          <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
            <span className="text-base text-yellow-600 font-bold">&lt;</span>
            <Link
              to="/"
              className="text-base md:text-sm text-yellow-600 font-bold no-underline hover:underline">
              Back
              link
            </Link>
          </div>

        </div>
      </main>
    </>
  );
};

export default CharacterDescription;




