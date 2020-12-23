import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';


const CharacterFeed = (props) => {
  const {characters} = props;

  return characters.map((character, key) => {

    return (
      <>
        <Link to={`/characters/${character.char_id}`} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={key}>
          <div className="flex items-end justify-end h-56 w-full bg-cover"
               style={{backgroundImage: `url(${character.img})`}}>
          </div>
          <div className="px-5 py-3">
            <div className="flex flex-wrap">
              <h1 className="text-gray-700 font-bold flex-auto text-xl font-semibold">
                <span className="text-gray-800 font-light text-lg">Name:</span> {character.name}
              </h1>

              <div className="w-full flex-none text-sm font-medium text-green-300 mt-1 text-lg">
                <span className="text-gray-800 font-light text-lg">occupation:</span> {character.occupation.join(' & ')}
              </div>
            </div>
            <p className="mt-4 text-md text-gray-600">
              <span className="text-gray-800 font-light text-md">DOB:</span> {character.birthday}
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
        </Link>
      </>
    );
  });
};

CharacterFeed.defaultProps = {
  characters: [],
  loading: false,
};

CharacterFeed.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default CharacterFeed;