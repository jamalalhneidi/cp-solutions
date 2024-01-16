import cli from '@actions/exec';
import fs from 'fs';
import path from 'path';

(async () => {
    console.log((await cli.getExecOutput('git branch')).stdout);
    const res = await cli.getExecOutput('git diff --name-only HEAD HEAD~1');
    console.log(`writing file to ${path.join(path.resolve(), 'test.txt')}`);
    if (!res.stdout.includes('test.txt'))
        fs.writeFileSync(path.join(path.resolve(), 'test.txt'), res.stdout);
})();
