# to-do-crud
 A simple To-Do list app using CRUD operations on a local postgres database
## Usage
 ts-node src/index.ts [operation] [args]
### Adding a new task
ts-node src/index.ts new [task-title] <br />
Example: ts-node src/index.ts new [task-title] <br />
### Listing tasks
ts-node src/index.ts list [all|pending|done] <br />
Example ts-node src/index.ts list done <br />
### Updating tasks (done / pending)
ts-node src/index.ts done [task-id] <br />
Example ts-node src/index.ts done 1 <br />
### Deleting tasks
ts-node src/index.ts delete [task-id] <br />
Example ts-node src/index.ts delete 1 <br />
## More commands
### Help
ts-node src/index.ts --help <br />
### Version
ts-node src/index.ts --version <br />
