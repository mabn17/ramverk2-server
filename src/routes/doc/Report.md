## Content
1. Get All Reports
2. Create a Report
3. Get Spesific Report

Back to [README](../../../README.md)

# 1. Get All Reports
Displays all reports.

**URL** : `/reports`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content examples**
```json
{
    "data": [
        {
            "title": "Example",
            "data": "## The report content"
        },
        {
         ...
        }
    ]
}
```

   
# 2. Create a Report
All data gets escaped and uses markdown to translate into html.

**URL** : `/reports`

**Method** : `POST`

**DATA** :
```json
{
    "title": "Awsome",
    "text": "## Important content!",
}
```

**Auth required** : YES  
**Header**: `{ "x-access-token": "Your JTW Token" }`

## Success Response

**Code** : `201 CREATED`

**Content examples**
```json
{
    "data": {
        "message": "Your report was successfully created.",
        "data": {
            "title": "Awsome",
            "data": "## Important content!"
        }
    }
}
```

   
# 3. Get Spesific Report
Shows the wanted report and returns it in HTML.

**URL** : `/reports/:kmom`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content examples**
```json
{
    "data": {
        "title": "Awsome",
        "data": "<h2 id='Thereportcontent'>The report content</h2>
                <p>with no id</p>"
    }
}
```