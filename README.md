# LikeHome
A mini clone of hotels.com

## Client - Run Instructions
- Move into the Client directory (cd)
- Check if the node_modules folder exists
    - Run "npm install" in the terminal if the folder is missing
- Run "npm start" to launch a localhost server
- Ctrl + C to stop the server (Terminate batch job --> Y)

## Server - Run Instructions
- Optional intall the requirements file
    - > pip install -r requirements.txt
- Move into the Server directory (cd Server)
- To run the program
    - > python manage.py runserver
- If the program having ERROR about "SECRET_KEY..."
    - Try add a (.env) file inside the Server directory (maybe missing)
    - Edit (.env) file, put this info inside the env
        - SECRET_KEY=
        - DEBUG=True
- While running, Ctrl + C can stop the server