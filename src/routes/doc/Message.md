## Content
1. Save Chat
2. Get Stored Chat

Back to [README](../../../README.md)

# 1. Save Chat
Saves all chat messages'  
**OPS!** previusly stored content will be lost.

**URL** : `/chat`

**Method** : `POST`

**DATA** :   
1. First object represents a chat message.  
2. Second represents an event such as Joe has joined/left the chat
```json
{
    "message": [
        {
            "from": {
              "id": 9999,
              "name": "Joe",
              "avatar": "https://api.adorable.io/avatars/285/9999"
            },
            "content": "My cool chat message"
        },
        {
         fill out later..
        }
    ]
}
```

**Auth required** : NO

## Success Response

**Code** : `201 CREATED`

**Content examples**
```json
{
    "data": {
        fill out later ..
    }
}
```


# 2. Get Stored Chat
Displays all reports.

**URL** : `/chat`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content examples**
```json
{
    "data": [
        fill out later ..
    ]
}
```
