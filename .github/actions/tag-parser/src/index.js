import cli from '@actions/exec';
import fs from 'fs';
import path from 'path';

(async () => {
    const res = await cli.exec('git diff --name-only HEAD HEAD~1');
    console.log(`writing file to ${path.join(path.resolve(), 'test.json')}`);
    fs.writeFileSync(
        path.join(path.resolve(), 'test.json'),
        JSON.stringify(res)
    );
})();
