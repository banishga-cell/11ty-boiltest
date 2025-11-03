
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addLiquidShortcode("itemCard", function(name, image, description) {
    return `
      <div class="item-card">
        <img src="${image}" alt="${name}" class="item-image">
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
    `;
  });
};