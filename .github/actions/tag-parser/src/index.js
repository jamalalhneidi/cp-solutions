import cli from '@actions/exec';
import fs from 'fs';
import path from 'path';

(async () => {
    console.log(path.resolve());
    console.log((await cli.getExecOutput('git branch')).stdout);
    const res = await cli.getExecOutput(
        'git log -m -1 --name-only --pretty="format:"'
    );
    if (!res.stdout.includes('test.txt')) {
        console.log(`writing file to ${path.join(path.resolve(), 'test.txt')}`);
        fs.writeFileSync(path.join(path.resolve(), 'test.txt'), res.stdout);
    }
})();
