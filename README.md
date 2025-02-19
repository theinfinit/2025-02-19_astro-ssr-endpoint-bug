Reproduction repository for [Issue withastro/astro #13269](https://github.com/withastro/astro/issues/13269)

## Important

The `main` branch contains last WORKING version. To see the bug, bump Astro version to `5.2.0` (or latest `5.3.0`). Alternatively, switch the git branch to `bug`.

## How to reproduce

### First, the expected result:

```sh
# Install dependencies
pnpm i

# Start dev server
pnpm d

# Call endpoint from another terminal 
curl -X OPTIONS http://localhost:3001/api/auth/test-options/ -i
```

Expected terminal output for Astro v5.1.9

```sh
# Expected message is received
→ ~  curl -X OPTIONS http://localhost:3001/api/auth/test-options/ -i
HTTP/1.1 200 OK
access-control-allow-credentials: true
access-control-allow-headers: Content-Type, Authorization
access-control-allow-methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
access-control-allow-origin: http://localhost:4321
content-type: text/plain;charset=UTF-8
Date: Wed, 19 Feb 2025 15:12:14 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"message":"This was an OPTIONS method!"}
→ ~
```

Expected Astro Dev Terminal output:

```sh
# Astro Dev Terminal should respond to the request...
🚀 ~ onRequest ~ isPreflight: true
🚀 ~ request: OPTIONS
16:20:32 [200] OPTIONS /api/auth/test-options/ 2ms
```

### Bug

Bug was introduced in Astro `5.2.0`.

Bump Astro version in `package.json`:

```json
"devDependencies": {
	"@astrojs/check": "^0.9.4",
	"astro": "5.2.0", // 👈 Bump to any version from 5.2.0 to 5.3.0
	"typescript": "^5.7.3"
},
```

```sh
# Install new Astro version
pnpm i

# Start dev server
pnpm d

# Call endpoint from another terminal 
curl -X OPTIONS http://localhost:3001/api/auth/test-options/ -i
```

Terminal output for Astro v5.2.0

```sh
# We haven't received response message.
→ ~  curl -X OPTIONS http://localhost:3001/api/auth/test-options/ -i
HTTP/1.1 204 No Content
Vary: Origin, Access-Control-Request-Headers
Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
Content-Length: 0
Date: Wed, 19 Feb 2025 15:33:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5

→ ~
```

Astro Dev Terminal output:

```sh
# Astro Dev Terminal will not respond to the request...
❌🤷‍♂️
```
