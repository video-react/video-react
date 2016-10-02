var prompt = require('prompt');
var GitHubApi = require('github');
var colors = require('colors');

colors.setTheme({ warn: 'yellow', error: 'red', success: 'green' });

prompt.start();

var github = new GitHubApi({ version: '3.0.0' });

var properties = [
  {
    description: 'GitHub username',
    name: 'username',
  },
  {
    description: 'GitHub password',
    name: 'password',
    hidden: true,
  },
];

var login = (callback) => {
  prompt.get(properties, (err, result) => {
    github.authenticate({
      type: 'basic',
      username: result.username,
      password: result.password,
    });

    github.repos.getLatestRelease({
      user: 'video-react',
      repo: 'video-react',
    }, (err, res) => {
      if (err != null) {
        console.log('Wrong Username/Password'.warn);
        return login(callback);
      } else {
        callback(res);
      }
    });
  });
};

var data = login((res) => {
  var tagname = res.tag_name;
  var nodeJSON = require('./package.json');
  var version =  nodeJSON.version;

  if (tagname == version) {
    console.log('Error: Version has already been released, update package.json first'.error);
  } else {
    github.repos.createRelease( {
      user: 'video-react',
      repo: 'video-react',
      tag_name: version,
    }, (err, war) => {
      if (err) {
        console.log('An error occurred'.error);
      } else {
        console.log(('New version ' + version + ' released').success);
      }
    });
  }
});
