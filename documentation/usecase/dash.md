# Dashboard

Home page.
Should to show the courses that user is subscriber.

- endpoint: `https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/users/fafa@eprogramar.com.br/courses`
- Authorization: `true`

| Key           | Value |
|:--------------|:------|
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWY4NTE3YjRiNTYzNzUwZTU0ZWMzMDU1IiwiaWF0IjoxNjAyOTcwNTM3LCJleHAiOjE2MDMwMzA1Mzd9.pqP5RRmW53QQCTHbKWzYEAoM-KSrS-yHzUGTeMTCRp0 |

## Request payload

Not is necessary request payload

## Response payload

```json
[
    {
        "_id": "5f8a262d0f64e8bc8a974c31",
        "name": "Curso de Java para Iniciantes",
        "tumbnail": "https://www.eprogramar.com.br/assets/images/slider-1.png",
        "sections": [
            {
                "_id": "5f8a262d0f64e8bc8a974c32",
                "name": "Setup",
                "order": 1,
                "contents": [
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c33",
                        "description": "Instalação do Java",
                        "value": "http://vimeo.com/eprogramar/java-install.mp4",
                        "order": 1
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c34",
                        "description": "Configuração do JAVA_HOME",
                        "value": "http://vimeo.com/eprogramar/java-home.md",
                        "order": 2
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c35",
                        "description": "Instalação da IDE",
                        "value": "http://vimeo.com/eprogramar/java-ide.mp4",
                        "order": 3
                    }
                ]
            },
            {
                "_id": "5f8a262d0f64e8bc8a974c36",
                "name": "POO - Programação Orientada a Objetos",
                "order": 2,
                "contents": [
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c37",
                        "description": "POO - Classes",
                        "value": "http://vimeo.com/eprogramar/poo-classes.mp4",
                        "order": 1
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c38",
                        "description": "POO - Métodos",
                        "value": "http://vimeo.com/eprogramar/poo-methods.md",
                        "order": 2
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c39",
                        "description": "POO - Encapsulamento",
                        "value": "http://vimeo.com/eprogramar/poo-encapsulamento.mp4",
                        "order": 3
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c3a",
                        "description": "POO - UML",
                        "value": "http://vimeo.com/eprogramar/poo-uml.md",
                        "order": 4
                    }
                ]
            }
        ],
        "createdAt": "2020-10-16T23:01:01.778Z",
        "updatedAt": "2020-10-16T23:01:01.778Z",
        "__v": 0
    },
    {
        "_id": "5f8b50944585635320be5965",
        "name": "Curso de Java POO",
        "tumbnail": "https://www.eprogramar.com.br/assets/images/slider-2.png",
        "sections": [
            {
                "_id": "5f8a262d0f64e8bc8a974c32",
                "name": "Setup",
                "order": 1,
                "contents": [
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c33",
                        "description": "Instalação do Java",
                        "value": "http://vimeo.com/eprogramar/java-install.mp4",
                        "order": 1
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c34",
                        "description": "Configuração do JAVA_HOME",
                        "value": "http://vimeo.com/eprogramar/java-home.md",
                        "order": 2
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c35",
                        "description": "Instalação da IDE",
                        "value": "http://vimeo.com/eprogramar/java-ide.mp4",
                        "order": 3
                    }
                ]
            },
            {
                "_id": "5f8a262d0f64e8bc8a974c36",
                "name": "POO - Programação Orientada a Objetos",
                "order": 2,
                "contents": [
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c37",
                        "description": "POO - Classes",
                        "value": "http://vimeo.com/eprogramar/poo-classes.mp4",
                        "order": 1
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c38",
                        "description": "POO - Métodos",
                        "value": "http://vimeo.com/eprogramar/poo-methods.md",
                        "order": 2
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c39",
                        "description": "POO - Encapsulamento",
                        "value": "http://vimeo.com/eprogramar/poo-encapsulamento.mp4",
                        "order": 3
                    },
                    {
                        "type": "MOVIE",
                        "_id": "5f8a262d0f64e8bc8a974c3a",
                        "description": "POO - UML",
                        "value": "http://vimeo.com/eprogramar/poo-uml.md",
                        "order": 4
                    }
                ]
            }
        ],
        "createdAt": "2020-10-16T23:01:01.778Z",
        "updatedAt": "2020-10-16T23:01:01.778Z",
        "__v": 0
    }
]
```

## Using curl

```shell script
curl --location --request GET 'https://eprogramar-platform-lambda-api.netlify.app/.netlify/functions/api/users/fafa@eprogramar.com.br/courses' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiNWY4NTE3YjRiNTYzNzUwZTU0ZWMzMDU1IiwiaWF0IjoxNjAyOTcyNzk2LCJleHAiOjE2MDMwMzI3OTZ9.LEN3tCwvyukW_dUi4lLHHIcLLZyf40pc0-hIryiw-wM'
```