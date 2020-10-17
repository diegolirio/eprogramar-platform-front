# Create a new User

To create a new user is require the token by `Authorization` header. 

- endpoint: `http://localhost:9000/.netlify/functions/api/auth/signup`
- Authorization: `true`

**Header**

| Key           | Value |
|:--------------|:------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWY4NTE3YjRiNTYzNzUwZTU0ZWMzMDU1IiwiaWF0IjoxNjAyOTcwNTM3LCJleHAiOjE2MDMwMzA1Mzd9.pqP5RRmW53QQCTHbKWzYEAoM-KSrS-yHzUGTeMTCRp0 | 

## Request payload

```json
{
  "name": "Test",
  "email": "test@eprogramar.com.br",
  "password": "test#123"
}
```

## Response payload

```json
{
  "courses": [],
  "_id": "5f8b64035d22870008068f85",
  "name": "Test",
  "email": "test@eprogramar.com.br",
  "password": "$2a$10$e//iBCB1tMDrOadfL4jMyesvULEic3sEfX3rqV/e.tOtUXcwegJX2",
  "createdAt": "2020-10-17T21:37:07.024Z",
  "updatedAt": "2020-10-17T21:37:07.024Z",
  "__v": 0
}
```

## Using curl

```shell script
curl --location --request POST 'https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/auth/signup' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWY4NTE3YjRiNTYzNzUwZTU0ZWMzMDU1IiwiaWF0IjoxNjAyOTcyNzk2LCJleHAiOjE2MDMwMzI3OTZ9.LEN3tCwvyukW_dUi4lLHHIcLLZyf40pc0-hIryiw-wM' \
--header 'Content-Type: application/json' \
--data-raw '{
		"name": "Test",
		"email": "test@eprogramar.com.br",
		"password": "test#123"
}'
```
