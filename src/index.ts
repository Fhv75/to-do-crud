import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const yargs = require("yargs")

interface Arguments {
    title?: string;
    filter?: string;
    id?: number;
}

yargs
  .command({
    command: 'new',
    describe: 'Add a new todo item',
    builder: {
      title: {
        describe: 'Todo item description',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv: Arguments) => {
      //addTodo(argv.title);
    },
  })
  .command({
    command: 'list [filter]',
    describe: 'List the todo items',
    builder: {
      filter: {
        describe: 'Filter the todo items (all|pending|done)',
        choices: ['all', 'pending', 'done'],
        default: 'all',
        type: 'string',
      },
    },
    handler: (argv: Arguments) => {
      //listTodos(argv.filter);
    },
  })
  .command({
    command: 'done <id>',
    describe: 'Mark a todo item as done',
    builder: {
      id: {
        describe: 'Todo item ID',
        demandOption: true,
        type: 'number',
      },
    },
    handler: (argv: Arguments) => {
      //markDone(argv.id);
    },
  })
  .command({
    command: 'delete <id>',
    describe: 'Delete a todo item',
    builder: {
      id: {
        describe: 'Todo item ID',
        demandOption: true,
        type: 'number',
      },
    },
    handler: (argv: Arguments) => {
      //deleteTodo(argv.id);
    },
  })
  .help()
  .alias('help', 'h')
  .version('1.0.0')
  .alias('version', 'v')
  .demandCommand()
  .argv;
