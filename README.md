[![Build Status](https://travis-ci.com/oyewoas/hwapi.svg?token=UhTLyPmC4FJFTsy9LJJ1&branch=develop)](https://travis-ci.com/oyewoas/hwapi)
[![Maintainability](https://api.codeclimate.com/v1/badges/eec3cfdc2df501237031/maintainability)](https://codeclimate.com/github/oyewoas/hwapi/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/eec3cfdc2df501237031/test_coverage)](https://codeclimate.com/github/oyewoas/hwapi/test_coverage)

# hwapi
WayFarer is a public bus transportation booking server, developed the back-end API with NodeJs and ExpressJs

## Table of Contents (Optional)

- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Prerequisites](#prerequisites)
- [Settings](#settings)
- [License](#license)


## Usage 

## Settings
  If you want set up locally you can follow these steps, you can also use `postman`(https://www.getpostman.com/downloads/) to test.  open terminal in root and do the following on terminal

   ```shell
   $ npm install
   ```
   Start server by running:

   ```shell
   $ npm run start
   ```
   The server should start running on `localhost:3000` then test the endpoints using [Features](#features)

   Test endpoints by running:
   ```shell
   $ npm run test
   ```

## Features

- Use the following Endpoints with `http://localhost:3000` as base url

    `GET /api/ping` to see if the api works

    `GET /api/posts?tag=yourtag` To get Posts with a specific tag e.g 'tech', 'health', 'science', tags can be more than one seperated by a comma

    `GET /api/posts?tag=yourtag&sortBy=parameter` To sort posts by either 'id', 'likes', 'reads', 'popularity' as your parameter

    `GET /api/posts?tag=yourtag&sortBy=sortparameter&direction=directionparameter` To get posts in specific directions either 'asc' (ascending) or 'desc' (descending), default direction parameter is 'asc' (ascending)

- Note: Both sortBy and direction parameter is options, but Tag is required

- A successful response will be
    For `GET /ping`

     ```javascript
      { success: true }
     ```

  and an unsuccessful response will be
    For `GET /posts?tag=yourtag`

    - When there is no tag paramenter

     ```javascript
     { error: '​Tags parameter is required' }
     ```

    For `GET /posts?tag=yourtag&sortBy=sortparameter&direction=directionparameter`

    - When there is invalid sortBy parameter

    ```javascript
     { error: 'sortBy parameter is invalid' }
     ```

    - When there is invalid direction parameter

    ```javascript
     { error: 'direction parameter is invalid' }
     ```

## Contributing
    I would love to hear from anyone that will like to contribute

## Prerequisites
- NodeJs and Npm (https://nodejs.org/en/download/)

- Redis Server (https://redis.io/topics/quickstart) for cache implementation on the api

- Create a .env file at the project root `hwapi/.env` then add `API_BASE_URL = 'required base url`.

## License
   None for now.
