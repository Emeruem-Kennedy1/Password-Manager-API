## Password Manager app API


## Endpoints
#### `/users`
- ##### `POST`
    The `POST` for this endpoint is used to create a new user. The reired fields are `username`, `email`, and `password`.
- ##### `GET`
    The `GET` for this endpoint is used to get all usernames in the database.
- ##### `PUT`
    The api does not support `PUT` requests.
- ##### `DELETE`
    The `DELETE` for this endpoint is used to delete all users in the database. This is only used for testing purposes. This endpoint should not be used in production.
- ##### `PATCH`
    This api does not support `PATCH` requests.

#### `/users/:username`
- ##### `GET`
    The `GET` for this endpoint is used to get the user details for the given username.
- ##### `POST`
    The `POST` for this endpoint is used to create a new password for a specific user. The required fields are `title`, `username`, `password`, and `url`.

#### `/users/:username/:services`
- ##### `GET`
    The `GET` for this endpoint is used to get all services that a  user has on their account for the given username.
- ##### `POST`
    The `POST` for this endpoint is used to create a new service for a specific user. The required fields are `serviceName`, `username`, and `password`.
- ##### `DELETE`
    The `DELETE` for this endpoint is used to delete a service for a specific user. The required fields are `serviceName`, `username`, and `password`.

#### `/users/:username/:services/:serviceName`
- ##### `GET`
    The `GET` for this endpoint is used to get the service details for the given service name.
- ##### `PATCH`
    The `PATCH` for this endpoint is used to update a service for a specific user. The required fields are `serviceName`, `username`, and `password`.
- ##### `DELETE`
    The `DELETE` for this endpoint is used to delete a service for a specific user. The required fields are `serviceName`, `username`, and `password`.
