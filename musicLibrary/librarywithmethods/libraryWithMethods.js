var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function() {

    for (var playlist in this.playlists) {

      var playlistnumber = this.playlists[playlist].id
      var playlistname = this.playlists[playlist].name
      var tracknumbers = this.playlists[playlist].tracks.length
      
      console.log(playlistnumber + ": "  + playlistname + ' - ' + tracknumbers + " tracks")
    }

  },
  
  printTracks: function() {

    for (var track in this.tracks) {
    
           var tracknumber = this.tracks[track].id
           var trackname = this.tracks[track].name
           var trackartist = this.tracks[track].artist
           var trackalbum = this.tracks[track].album
           
           console.log(tracknumber + ": "  + trackname + ' by ' + trackartist + " (" + trackalbum + ")")
    }

},
  printPlaylist: function(playlist) {

            
              
  var playlistnumber = this.playlists[playlist].id
  var playlistname = this.playlists[playlist].name
  var tracknumbers = this.playlists[playlist].tracks.length
  
  console.log(playlistnumber + ": "  + playlistname + ' - ' + tracknumbers + " tracks")

  for (var track of this.playlists[playlist].tracks) {

         var tracknumber = this.tracks[track].id
         var trackname = this.tracks[track].name
         var trackartist = this.tracks[track].artist
         var trackalbum = this.tracks[track].album
         
         console.log(tracknumber + ": "  + trackname + ' by ' + trackartist + " (" + trackalbum + ")")
  }
},

addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)
    
},

uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  
  
  addTrack: function(name, artist, album) {
         var newTrackId = uid()
         this.tracks[newTrackId] = { id: newTrackId,
         name: name,
         artist: artist,
         album: album
  }
  
  },

  addPlaylist: function(name) {
 
           var newPlaylistId = uid()
           this.playlists[newPlaylistId] = { id: newPlaylistId,
           name: name,
           tracks: []
    }
},

  


}

console.log("PRINT PLAYLIST")
library.printPlaylists()

console.log("PRINT TRACKS")
library.printTracks()

console.log("PRINT PLAYLIST FOR GIVEN TRACKS")
library.printPlaylist('p01')

console.log("ADD EXISTING TRACK TO EXISTING PLAYLIST")
library.addTrackToPlaylist("t01" , "p02")
printPlaylist('p02')

console.log("ADD TRACK TO LIBRARY")
library.addTrack("Five Thirty-Seven", "James MAy", "Woodplace 2019")
console.log(library.tracks)

console.log("ADD PLAYLIST TO LIBRARY")
library.addPlaylist("p03")
console.log(library.playlists)

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// printPlaylists: function() {

//        for (var playlist in library.playlists) {
       
//               var playlistnumber = this.playlists[playlist].id
//               var playlistname = this.playlists[playlist].name
//               var tracknumbers = this.playlists[playlist].tracks.length
              
//               console.log(playlistnumber + ": "  + playlistname + ' - ' + tracknumbers + " tracks")
//        }

// }
// console.log("PRINT PLAYLIST")
// library.printPlaylists()



// console.log(library.playlists[playlists])
// var playlist
// // playListNumber = library.playlists

// console.log(playListNumber)


// var listoftracks = library.playlists;
// console.log(listoftracks);

  


// var library = {
//        tracks: { t01: { id: "t01",
//                         name: "Code Monkey",
//                         artist: "Jonathan Coulton",
//                         album: "Thing a Week Three" },
//                  t02: { id: "t02",
//                         name: "Model View Controller",
//                         artist: "James Dempsey",
//                         album: "WWDC 2003"},
//                  t03: { id: "t03",
//                         name: "Four Thirty-Three",
//                         artist: "John Cage",
//                         album: "Woodstock 1952"}
//                },
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {

//        for (var track in library.tracks) {
       
//               var tracknumber = library.tracks[track].id
//               var trackname = library.tracks[track].name
//               var trackartist = library.tracks[track].artist
//               var trackalbum = library.tracks[track].album
              
//               console.log(tracknumber + ": "  + trackname + ' by ' + trackartist + " (" + trackalbum + ")")
//        }

// }
// console.log("PRINT TRACKS")
// printTracks()



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlist) {

            
              
                     var playlistnumber = library.playlists[playlist].id
                     var playlistname = library.playlists[playlist].name
                     var tracknumbers = library.playlists[playlist].tracks.length
                     
                     console.log(playlistnumber + ": "  + playlistname + ' - ' + tracknumbers + " tracks")

                     for (var track of library.playlists[playlist].tracks) {
       
                            var tracknumber = library.tracks[track].id
                            var trackname = library.tracks[track].name
                            var trackartist = library.tracks[track].artist
                            var trackalbum = library.tracks[track].album
                            
                            console.log(tracknumber + ": "  + trackname + ' by ' + trackartist + " (" + trackalbum + ")")
                     }
              }
       
       
       console.log("PRINT PLAYLIST FOR GIVEN TRACKS")
       printPlaylist('p01')



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId)
       
}
console.log("ADD EXISTING TRACK TO EXISTING PLAYLIST")
addTrackToPlaylist("t01" , "p02")
printPlaylist('p02')


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
       var newTrackId = uid()
       library.tracks[newTrackId] = { id: newTrackId,
       name: name,
       artist: artist,
       album: album
}

}
console.log("ADD TRACK TO LIBRARY")
addTrack("Five Thirty-Seven", "James MAy", "Woodplace 2019")
console.log(library.tracks)
       // var addTrackToPlaylist = function (trackId, playlistId) {
              // library.playlists[playlistId].tracks.push(trackId)
              
       
       // addTrackToPlaylist("t01" , "p02")
       // printPlaylist('p02')
// }


// adds a playlist to the library

var addPlaylist = function (name) {
       // var addTrack = function (name, artist, album) {
              var newPlaylistId = uid()
              library.playlists[newPlaylistId] = { id: newPlaylistId,
              name: name,
              tracks: []
       }
}
console.log("ADD PLAYLIST TO LIBRARY")
       addPlaylist("p03")
       console.log(library.playlists)




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}