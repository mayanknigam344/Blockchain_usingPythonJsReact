**Activate the virtual env**

```
source blockchain-env/bin/activate - LINUX Command
venv/scripts/activate - WINDOWS
```

**Install all packages**

```
pip install -r requirements.txt
```

**Run the tests**

Make sure to activate the virtual env.
```
python -m pytest backend/tests
```
**Run the Application and API**
Make sure to activate the virtual env.

```
python -m backend.app
```

**Run a peer instance**
Make sure to activate the virtual env.

```
export PEER = True && python -m backend.app  - LINUX Command
set "PEER=True" && python -m backend.app     - WINDOWS Command
```


**Run the Frontend**
In the frontend directory:
```
npm run start
```

**Seed the backend with data**
Make sure to activate the virtual env.

```
set "SEED_DATA=True" && python -m backend.app 
```


