# DM Helper

![Screenshot of application](./assets/Screenshot.jpg)

## Description

A one-stop web app for campaign reference for a Dungeons and Dragons game. Complete with dice roller, character sheets, and ability references. Easily add homebrew and adapt for house rules.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

The easiest way to install DM Helper is to clone this repository using
the following command.

```
git@github.com:bear-evans/dm-helper.git
```

Once downloaded, you can install its dependencies by navigating to the
application's directory and issuing the following command.

```
npm install
```

This will install `express`, `mysql2`, `sequelize`, `bcrypt`, `connect-session-sequelize`, `express-handlebars`, `express-session`, `passport` and `dotenv`.

A database schema is included for convenience. To load the
schema, initialize mysql from the command line in the application's directory
and run

```
mysql> source db/schema.sql;
```

Additionally, you will need to add a .env file specifying your username,
password, and host for the MySQL connection. A template has been provided.

## Usage

To initiate the application, run

```
node server.js
```

from the app's directory.

A live demonstration of the app's functionality can be found [here](https://mysterious-oasis-83726.herokuapp.com/).

## License

Copyright 2021 Bear Evans and Allen Ladd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
