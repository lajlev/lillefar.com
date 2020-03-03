module.exports = config => {

  config.setDataDeepMerge(true);
  
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