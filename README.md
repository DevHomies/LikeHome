# LikeHome

A mini clone of hotels.com

## Client - Run Instructions

- Move into the Client directory (cd)
- Check if the node_modules folder exists
  - Run "npm install" in the terminal if the folder is missing
- Run "npm start" to launch a localhost server
- Ctrl + C to stop the server (Terminate batch job --> Y)

## Server - Run Instructions

- Use a python virtual environment to avoid dependency problems
  - Navigate to the `LikeHome` base directory
  - create environment using `python3 -m venv ./venv`. This only has to be done once.
  - activate environment for current terminal session
    - Linux/MacOS - `source venv/bin/activate`
    - windows - `.\venv\Scripts\activate`
  - If not done already, install the python dependencies
    - `pip install -r requirements.txt`
- Move into the Server directory (cd Server)
- Run npm run build in the CLIENT folder before running the python server
- To run the program
  - > python manage.py runserver
- If the program having ERROR about "SECRET_KEY..."
  - Try add a (.env) file inside the Server directory (maybe missing)
  - Edit (.env) file, put this info inside the env
    - SECRET_KEY=
    - DEBUG=True
- While running, Ctrl + C can stop the server
