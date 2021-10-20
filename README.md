# diary-app

A space to share your thoughts and memories anonymously, simply come up with a pseudonym and and start writing! 

# installation & usage 

to get started:
cd server 
docker compose up

to open the webpage:
cd client 
open index.html

when you are finished:
docker compose down --remove-orphans --volumes 

# changelog 

# wins & challenges 

wins:
- able to achieve required functionality
- getting the api to interact with the database successfully

challenges:
- styling of the web page, not the most sleek and stylish
- initial problems with the file paths in docker compose
- heroku deployment (not necessary but raised problems)