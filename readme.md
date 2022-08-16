## Password Manager app API

#### Local Use
To use the app locally, you can use the following command to install the app dependencies:
```
 $ npm i
```
### Installation

Clone the project:

```
git clone https://github.com/Emeruem-Kennedy1/Password-Manager-API.git
```

Move into the project directory and install it's dependencies:

```
cd Password-Manager-API/
npm i
```

Start the mongoDB server on your local machine (if you don't have it already). If you don't have mongoDB installed, you can download it from [here](https://www.mongodb.com/downloads). You can install mongoDB for your OS by following the instructions on 
- [MongoDB mac installation tutorial](https://www.youtube.com/watch?v=4crXgQZG4W8&t=386s)
- [MongoDB windows installation tutorial](https://www.youtube.com/watch?v=Ph1Z97X6xno&ab_channel=ProgrammingKnowledge)

After installation, you can start the server by running the following command:

```
mongod
```

After starting the monogoDB server, you can start the app by running the following command:

```
npm run app
```
or by running the following command if you have nodemon installed:

```
nodemon app.js
```


### API Entrypoint
The API entry point is the following:
    
http://localhost:3000/api/v1/{API_KEY}

to create a new API key, you should create a new api key by creatin a .env file in the root directory of the project. The file should contain the following:

```
ADMIN_PASSWORD=password
ADMIN_USERNAME=username
```
check the console for the API key.

### API Endpoints
The API has the following endpoints:
#### `/users`
| Method | Description |
|--------|-------------|
| `POST` |  create a new user. The reired fields are `username`, `email`, and `password`. |
| `GET` | Get all usernames in the database |
| `DELETE` | delete all users in the database. This is only used for testing purposes. This endpoint should not be used in production. |
| `PATCH` | Not supported |
| `PUT` | Not supported |

#### `/users/:emailID`
| Method | Description |
|--------|-------------|
| `GET` | Get a user details for the given username |
| `DELETE` | delete a user by username |
| `POST` | create a new password for a specific user. The required fields are `title`, `username`, `password`, and `url`. |
| `PUT` | Not supported |
| `PATCH` | Not Supported |




#### `/users/:emailID/:services`
| Method | Description |
|--------|-------------|
| `GET` | Get all services for a specific user|
| `DELETE` | Delete deletes all services for a specific user.|
| `POST` | Create a new service for a specific user. The required fields are `title`, `username`, `password`|
| `PUT` | Not supported |
| `PATCH` | Not Supported |


#### `/users/:emailID/:services/:serviceID`
| Method | Description |
|--------|-------------|
| `GET` | Get a specific service details for a specific user |
| `DELETE` | Delete a service for a specific user.|
| `PATCH` |update a service for a specific user. The required fields are `serviceName`, `username`, and `password`.|
| `POST` | Not supported |
| `PUT` | Not supported |

