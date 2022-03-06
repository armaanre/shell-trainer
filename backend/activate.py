import subprocess
import os
from pathlib import Path

# Path to your python in the env
BASE_DIR = Path(__file__).resolve().parent.parent
pythonBinary = os.path.join(BASE_DIR, "backend/venv/bin/python")
managePy = os.path.join(BASE_DIR, "backend/manage.py")

subprocess.Popen([pythonBinary, managePy, "runserver"])
