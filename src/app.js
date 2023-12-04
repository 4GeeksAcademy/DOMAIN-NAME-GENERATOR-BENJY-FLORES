window.onload = function() {
  let pronouns = ["the", "a", "some", "another", "any"];
  let adjectives = ["skinny", "tall", "pretty", "ugly", "funny"];
  let nouns = ["doggo", "hamster", "guy", "cat"];
  let tlds = [".com", ".org", ".us", ".io", ".net"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${pronoun}${adjective}${noun}${tld}`);
        }
      }
    }
  }

  // Display the generated domain names in the console
  console.log(domainNames);
};
