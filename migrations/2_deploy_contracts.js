const Repoet = artifacts.require("Repoet");

module.exports = function(deployer) {
  // Pass the required arguments to Repoet constructor
  deployer.then(async () => {
    await deployer.deploy(Repoet);
  });
};