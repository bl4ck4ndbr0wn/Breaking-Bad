import PropTypes from 'prop-types';
import React from 'react';


const CharacterFeed = (props) => {
  const {characters} = props;

  return characters.map((character) => (
    <div
      key={character.char_id}
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div className="flex items-end justify-end h-56 w-full bg-cover"
             style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'})`}}>
          <button
            className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Breaking Bad
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">Bryan Cranston</h3>
          <span className="text-gray-500 mt-2">Walter White</span>
        </div>
      </div>
    </div>
  ));
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