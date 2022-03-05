# Shell-Trainer
A website to practice your linux shell commands

### Main features

- [ ] Randomly generate shell problems to solve
- [ ] Set different levels of difficulty
    - [ ] Easy
    - [ ] Medium
    - [ ] Hard

# Initial Setup

All instructions are for MacOS or Linux.

First clone the repository from Github and switch to the new directory:

     git clone git@github.com:armaanre/shell-trainer.git
     cd shell-trainer 


## Backend

Creating the virtualenv for your project.

```
python -m venv venv
```

Start the virtual environment

```
source venv/bin/activate
```

Change directory to backend:

```
cd backend
``` 

Install project dependencies:

```
pip install -r requirements.txt
``` 
    
Then simply apply the migrations:

```
python manage.py migrate
```

Test that you can now run the development server:

```
python manage.py runserver
```

# Development Instructions

## Backend

Starting the virtual environment:

```
source venv/bin/activate
```

Running the server:

```
python manage.py runserver
```
