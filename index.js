#! /usr/bin/env node

//const { program } = require('commander');
import { program } from 'commander';
//const list = require('./commands/list');
import list from './commands/list.js';

program
   .command('list')
   .description('List all the TODO tasks')
   .action(list)

program.parse();