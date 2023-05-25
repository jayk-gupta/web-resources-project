
const github = require('@actions/github');

async function main() {
  // Get a list of all the contributors who have made a commit to the project.
  const contributors = await github.getContributors();

  // Generate a list of links to each contributor's GitHub profile.
  const links = contributors.map(contributor => {
    return `https://github.com/${contributor.login}`;
  });

  // Add the list of links to the README.
  const readme = await github.readFile('README.md');
  const newReadme = readme.replace('## Contributors', `## Contributors

${links.join('\n')}`);
  await github.writeFile('README.md', newReadme);
}

main();
