import PropTypes from 'prop-types';
import React from 'react';


const CharacterFeed = (props) => {
  const {characters} = props;

  return characters.map((character, key) => {

    return (
      <>
        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={key}>
          <div className="flex items-end justify-end h-56 w-full bg-cover"
               style={{backgroundImage: `url(${character.img})`}}>
          </div>
          <div className="px-5 py-3 flex justify-between">
            <div>
              <h3 className="text-gray-700 uppercase">Bryan Cranston</h3>
              <span className="text-gray-500 mt-2">Walter White</span>
            </div>
            {character.category === 'Breaking Bad' ?
              <img
                className="flex-shrink-0 h-12 w-12 rounded-lg rounded-lg bg-gray-300 text-white p-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                src="https://img.icons8.com/ios/452/breaking-bad.png" alt="breaking bad logo"/> :
              character.category === 'Breaking Bad, Better Call Saul' ?
                <>
                  <img
                    className="flex-shrink-0 h-12 w-12 rounded-lg rounded-lg bg-gray-300 text-white p-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    src="https://img.icons8.com/ios/452/breaking-bad.png" alt="breaking bad logo"/>
                  <img
                    className="flex-shrink-0 h-12 w-12 rounded-lg rounded-lg bg-gray-300 text-white p-1 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KeV9qzo0WSRSr-0f1Cw38RmBd9Z0-gZ-2w&usqp=CAU'
                    alt="breaking bad logo"/>
                </>
                :
                <img
                  className="flex-shrink-0 h-12 w-12 rounded-lg rounded-lg bg-gray-300 text-white p-1 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KeV9qzo0WSRSr-0f1Cw38RmBd9Z0-gZ-2w&usqp=CAU'
                  alt="breaking bad logo"/>
            }
          </div>
        </div>
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