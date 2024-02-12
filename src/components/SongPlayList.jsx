import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createRandomSong, svgCode } from '../data'
import { addSong, removeSong } from '../store'



function SongPlayList() {
  const [image, setImg] = useState('');
  const [filterParam, setFilterParam] = useState(['All']);
  const [searchParam, setSearchParam] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]); // State for filtered songs

    const dispatch = useDispatch()
    const songPlayList = useSelector((state) => {
        console.log(state)
        return state.songs
    })

    const handleSongAdd = (song) => {
        const action = addSong(song)
        dispatch(action)
        setImg(svgCode())
    }

    const handleSongRemove = (song) => {
        dispatch(removeSong(song))
    }
   
    const handleSearch = (searchQuery) => {
      setSearchParam(searchQuery); // Update searchParam with the actual query
      setFilteredSongs(
        songPlayList.filter((song) => song.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    };
  
    const renderedSongs = songPlayList.map((song) => {
        return (
        <div key={song} className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-4">{song}
            
            <button
                onClick={() => handleSongRemove(song)}
                className="button is-danger"
              >
              <i className="fas fa-times-circle"></i>

              </button>

            </h2>
            <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
            
              <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
               <p className='mx-1'> Liked by </p>
               <img className='w-5' src={`data:image/svg+xml;utf8,${encodeURIComponent(image)}`} />
    
              </dd>
            </div>
          </div>
          );
    }) 

    return ( 
      <div className="mx-3 w-11/12 sm:w-11/12 md:w-8/12 lg:w-6/12 backdrop-blur-sm bg-white/40 p-6 rounded-lg shadow-sm border-violet-200 border">
        <div className="w-full flex justify-between items-center p-3">
          <h2 className="text-xl font-semibold">My Playlist</h2>
          <button 
          onClick={() => handleSongAdd(createRandomSong())}
          id="openModalBtn" className="flex items-center bg-gradient-to-r from-violet-300 to-indigo-300  border border-fuchsia-00 hover:border-violet-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            <svg className="w-4 h-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <p className="text-white">Add a new song</p>
        </button>
        </div>
        <div className="w-full flex justify-center p-1 mb-4">
          <div className="relative w-full">
            <input 
            onChange={(e) => handleSearch(e.target.value)}
            type="text" className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300" placeholder="Search..." /> 
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
        </div>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {renderedSongs}
       
          {filteredSongs.map((song) => (
           
           <div key={song} className="backdrop-blur-sm bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-violet-200 hover:border-2 transition-colors duration-300">
           <h2 className="text-xl font-semibold mb-4">{song}
           
           <button
               onClick={() => handleSongRemove(song)}
               className="button is-danger"
             >
             <i className="fas fa-times-circle"></i>

             </button>

           </h2>
           <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
           
             <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <p className='mx-1'> Liked by </p>
              <img className='w-5' src={`data:image/svg+xml;utf8,${encodeURIComponent(image)}`} />
   
             </dd>
           </div>
         </div>

          ))}

      </div>
        </div>
      );
}

export default SongPlayList