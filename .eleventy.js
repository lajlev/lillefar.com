module.exports = config => {

  config.setDataDeepMerge(true);
  config.setUseGitIgnore(false);
  
  config.addPassthroughCopy("*.js");
  config.addPassthroughCopy("*.css");
  
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_views",
      data: "_data"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  }
}