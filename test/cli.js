'use strict'

const commander = require('commander');
const coding = require('./coding');

const makeProgram = () => {
    const program = new commander.Command();

    program
        .command('coding')
        .action(coding.cliCodingTest);

    return program;
};

const bootstrap = async () => {
    const program = makeProgram();
    try {
        await program.parseAsync(process.argv);
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

bootstrap();
