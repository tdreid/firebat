#!/usr/bin/env node

const program = require('commander');
const package = require('../package');

program.version(package.version);

const get = require('./commands/get', { isDefault: true });
program.command('get <ref>').action(get);

const post = require('./commands/post');
program.command('post <ref> <file>').action(post);

const put = require('./commands/put');
program.command('put <ref> <file>').action(put);

const patch = require('./commands/patch');
program.command('patch <ref> <file>').action(patch);

const del = require('./commands/delete');
program.command('delete <ref>').action(del);

program.parse(process.argv);
