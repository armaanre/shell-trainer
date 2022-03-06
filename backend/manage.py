#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import signal

def signal_handler(sig, frame):
    print('You pressed Ctrl+C!')
    sys.exit(0)

def main():
    """Capture signal interrupt"""
    signal.signal(signal.SIGINT, signal_handler)

    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shellTrainer.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
