# StarWarsServer

## Functionality

1. The backend has two end points. The endpoints are:
    1. /films -> gets the list of films based on search query
    2. /films/:id/characters -> gets the list of characters based on the film id.
2. The films search query should be a string ('/films?searchterm=a')
2. The characters can be sorted in ascending or descending order ('/films/:id/characters?sort=asc')

## Techniques Used
1. Node js.
2. Express js.
3. CORS Middleware.
4. [SWAPI](https://swapi.dev/documentation)

## To run the server
1. Clone the project by using the following command.

     `https://github.com/nirustanite/StarWarsServer.git`
 
2. cd to the project directory.

3. Start the server by using this command.
    
    `npm start`
    
## Front end can be found on the following link

    [STAR_WARS_CLIENT](https://github.com/nirustanite/StarWarsServer)
