## Password Manager app API


## Endpoints
#### `/users`
| Method | Description |
|--------|-------------|
| `POST` |  create a new user. The reired fields are `username`, `email`, and `password`. |
| `GET` | Get all usernames in the database |
| `DELETE` | delete all users in the database. This is only used for testing purposes. This endpoint should not be used in production. |
| `PATCH` | Not supported |
| `PUT` | Not supported |

#### `/users/:user`
| Method | Description |
|--------|-------------|
| `GET` | Get a user details for the given username |
| `DELETE` | delete a user by username |
| `POST` | create a new password for a specific user. The required fields are `title`, `username`, `password`, and `url`. |
| `PUT` | Not supported |
| `PATCH` | Not Supported |




#### `/users/:user/:services`
| Method | Description |
|--------|-------------|
| `GET` | Get all services for a specific user|
| `DELETE` | Delete deletes all services for a specific user.|
| `POST` | Create a new service for a specific user. The required fields are `title`, `username`, `password`|
| `PUT` | Not supported |
| `PATCH` | Not Supported |


#### `/users/:username/:services/:serviceID`
| Method | Description |
|--------|-------------|
| `GET` | Get a specific service details for a specific user |
| `DELETE` | Delete a service for a specific user.|
| `PATCH` |update a service for a specific user. The required fields are `serviceName`, `username`, and `password`.|
| `POST` | Not supported |
| `PUT` | Not supported |

