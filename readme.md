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
    The `GET` for this endpoint is used to get all the passwords for a specific user.
- ##### `POST`
    The `POST` for this endpoint is used to create a new password for a specific user. The required fields are `title`, `username`, `password`, and `url`.