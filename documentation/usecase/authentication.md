# User Authentication

By Login to get a Token

1. When user to do login, the application should send to api **email** and **password** in Plain Text using a POST HTTTP method.   
2. The response should be a JSON with auth: `true|false` if true should have token.   
3. The application should storage this token in LocalStorage together currentUser(email) to be used in the next requests.  

- endpoint: `http://localhost:9000/.netlify/functions/api/auth/signin`
- Authorization: `false`

## Request payload

```json
{
  "email": "test@eprogramar.com.br",
  "password": "test#123"
}
```

## Response payload

```json
{
  "auth": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWY4NTE3YjRiNTYzNzUwZTU0ZWMzMDU1IiwiaWF0IjoxNjAyODg3NTk1LCJleHAiOjE2MDI5NDc1OTV9.or6BFJ-ZuaHTWk3bgJwssfO9IFUshiKqNzxgpidPkEY"
}
```

## Using curl

```shell script
curl --location --request POST 'https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/auth/signin' \
--header 'Content-Type: application/json' \
--data-raw '{
		"email": "test@eprogramar.com.br",
		"password": "test#123"
}'
```