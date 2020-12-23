import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';


const CharacterInfo = (props) => {
  const {character} = props;

  return (
    <>
      <div className="sm:flex sm:items-start">
        <img className="inline-block h-48 w-48 rounded-full ring-2 ring-white"
             src={character.img}
             alt="">
        </img>
        <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div className="flex flex-wrap">
            <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-2" id="modal-headline">
              {character.name} <span className="font-light text-lg  text-gray-800"> aka {character.nickname}</span>
            </h3>

            <div className="w-full flex-none text-sm font-medium text-green-400 mt-1 text-lg">
              <span
                className="text-gray-800 font-medium text-lg">occupation:</span><br/> {character.occupation.join(' & ')}
            </div>
            <h1 className="w-full flex-none leading-6 font-medium text-blue-300 mt-1 text-lg">
              <span
                className="text-gray-800 font-sans text-lg">Portrayed by:</span><br/> {character.portrayed}
            </h1>
          </div>
          <p className="mt-4 text-md text-gray-600">
            <span className="text-gray-800 font-light text-md">Date Of Birth:</span><br/> {character.birthday}
          </p>
          <div className="flex space-x-3 mt-4 text-sm font-medium">
            <div className="flex-auto flex space-x-3">
              <button
                className={classNames('uppercase text-xs font-bold w-1/2 flex items-center justify-center rounded-full text-white', {
                  'bg-green-400': character.status === 'Alive',
                  'bg-red-400': character.status.indexOf('Presumed dead') > -1 ||
                    character.status.indexOf('Deceased') > -1,
                })}
                type="submit">
                {character.status}
              </button>
            </div>
            <div className="flex-none flex">
              {character.category === 'Breaking Bad' ?
                <img
                  className="flex-shrink-0 h-10 w-10 rounded-lg rounded-lg bg-gray-300 text-white p-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  src="https://img.icons8.com/ios/452/breaking-bad.png" alt="breaking bad logo"/> :
                character.category === 'Breaking Bad, Better Call Saul' ?
                  <>
                    <img
                      className="flex-shrink-0 h-10 w-10 rounded-lg rounded-lg bg-gray-300 text-white p-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                      src="https://img.icons8.com/ios/452/breaking-bad.png" alt="breaking bad logo"/>
                    <img
                      className="flex-shrink-0 h-10 w-10 rounded-lg rounded-lg bg-gray-300 text-white p-1 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KeV9qzo0WSRSr-0f1Cw38RmBd9Z0-gZ-2w&usqp=CAU'
                      alt="breaking bad logo"/>
                  </>
                  :
                  <img
                    className="flex-shrink-0 h-10 w-10 rounded-lg rounded-lg bg-gray-300 text-white p-1 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KeV9qzo0WSRSr-0f1Cw38RmBd9Z0-gZ-2w&usqp=CAU'
                    alt="breaking bad logo"/>
              }
            </div>
          </div>

        </div>
      </div>
      <hr className="bg-gray-300 my-12"/>
      <div className="text-center">
        <h3 className='text-xl md:text-3xl mt-6 text-indigo-600 tracking-tight leading-10 sm:leading-none'>Seasons
          Categories</h3>
        <p className="text-md md:text-xl mt-3">Seasons in which the character appears</p>

      </div>

      <h3 className='text-center text-lg md:text-2xl mt-6 text-green-600 tracking-tight leading-10 sm:leading-none'>Breaking
        Bad</h3>
      <div className="flex flex-wrap mt-2 justify-center">
        {character.appearance.map((season) => (
          <div className="m-3">
            <a href="https://www.facebook.com/QuickToolz" title="Quicktoolz On Facebook"
               className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto">{season}</span>
            </a>
          </div>
        ))}
      </div>
      <h3 className='text-center text-lg md:text-2xl mt-6 text-green-600 tracking-tight leading-10 sm:leading-none'>Better Call Saul</h3>
      <div className="flex flex-wrap mt-2 justify-center">
        {character.better_call_saul_appearance.length > 0 ? character.better_call_saul_appearance.map((season) => (
          <div className="m-3">
            <a href="https://www.facebook.com/QuickToolz" title="Quicktoolz On Facebook"
               className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto">{season}</span>
            </a>
          </div>
        )) : <div className="m-3">
          <a href="https://www.facebook.com/QuickToolz" title="Quicktoolz On Facebook"
             className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span className="mx-auto">None</span>
          </a>
        </div>
        }
      </div>
    </>
  );
};

CharacterInfo.defaultProps = {
  character: {},
};

CharacterInfo.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterInfo;