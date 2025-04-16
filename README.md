# pict-mcp

Pairwise Independent Combinatorial Testings for MCP

## 🚧 Work in Progress 🚧

> [!WARNING]
> This project is currently under active development.
> It is not yet stable and its API and features may change without notice.
> 
> Use in production environments is **not recommended** at this time.

## Install

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher)
- [pnpm](https://pnpm.io/) (v10 or higher)

### Commands

In your terminal

```sh
git clone https://github.com/takeyaqa/pict-mcp.git
pnpm install
pnpm build
```

In your MCP client

```json
{
  "mcpServers": {
      "pict-mcp": {
          "command": "node",
          "args": [
            "/ABSOLUTE/PATH/TO/PARENT/FOLDER/pict-mcp/dist/index.js"
          ]
      }
  }
}
```


## Microsoft PICT License

pict-mcp includes and distributes [Microsoft PICT (Pairwise Independent Combinatorial Testing)](https://github.com/microsoft/pict), which is licensed under the MIT License:

```
MIT License

Copyright (c) Microsoft Corporation. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## pict-mcp License

pict-mcp is licensed under the MIT License:

[LICENSE](LICENSE)
