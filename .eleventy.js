module.exports = config => {

  config.setDataDeepMerge(true);
  config.setUseGitIgnore(false);
  
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_views",
      data: "_data"
    },
    templateFormats: ["html", "md", "css"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  }
}