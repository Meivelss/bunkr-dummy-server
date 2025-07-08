
# bunkr-dummy-server

This dummy server was made for testing purposed for the [Bunkr](https://github.com/Meivelss/Bunkr-frontend) project.

## To install dependencies:

```bash
bun install
```

To run the server:

```bash

bun index.ts

```

## Current endpoints

### ``GET /entries``
Responds with JSON mockup warehouse data.

    generalID: string,
    itemID: string
    name: string
    state: ItemState,
    building: Building
    chamber: Chamber
    shelf: string


## Types
### Enums
### ItemState
    Available = 0
    Reserved = 1
    Borrowed = 2

### Building
    Warehouse = 0
    MatInf = 1
    XLO = 2

### Chamber
    First = 1
    Second = 2
    Third = 3
    Forth = 4
    Fifth = 5

  
