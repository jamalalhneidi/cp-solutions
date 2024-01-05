import cli from '@actions/exec';
(async () => {
    const res = await cli.exec('git diff --name-only HEAD HEAD~1');
    console.log(res);
})();
