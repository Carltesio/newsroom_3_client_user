describe("User can select article by category", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles",
      response: "fixture:articles.json"
    });
    cy.route({
      method: "GET",
      url: "https://newsroom3api.herokuapp.com/api/v1/articles/**",
      response: "fixture:specific_free_article.json"
    });
    cy.visit("/");
  });
  it("can see all articles in one category", () => {
    cy.get("#category-header");
    cy.get("#sports").click();
    cy.get("#article-list").should("contain", "This is a smashing title");
    cy.get("#article-list").should("not.contain", "Zero infected on Mars");
    cy.get("#article-list").should("not.contain", "Lau new president");
    cy.get("#open-article").click();
    cy.get("#single-article").should("contain", "This is a smashing title");
    cy.get("#snippet").should("contain", "And this is an awesome snippet");
    cy.get("#content").should("contain", "And this is the best content you ever read");
    cy.get("#article-list").should("not.exist");
    cy.get("#home-button").click();
    cy.get("#article-list").should("contain", "This is a smashing title");
  });
});
