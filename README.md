[![Build Status](https://travis-ci.org/rasjani/ngrok-web.svg?branch=master)](https://travis-ci.org/rasjani/ngrok-web)

NGROK-WEB
=========

To be something that resembles ui for configuring locally running ngrok
instance.



Backend API


| Route | HTTP | Description |
| ----- | ---- | ----------- |
| /api/ | GET  | TBD         |
| /api/defaults | GET | returns all top level configs |
| /api/defaults | PUT | updates all top level configs |
| /api/tunnels | GET | returns the list of all tunnels |
| /api/tunnels | DELETE | removes all tunnels |
| /api/tunnel/:tunnelname | GET | returns tunnel :tunnelname |
| /api/tunnel/:tunnelname | PUT | updates tunnel :tunnelname |
| /api/tunnel/:tunnelname | POST | creates a new tunnel  :tunnelname |
| /api/tunnel/:tunnelname | DELETE | removes tunnel :tunnelname |

