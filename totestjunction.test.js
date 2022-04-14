const camelCaseToSnakeCase = (textInCamelCase) => {
  if (textInCamelCase.trim() === "") {
    return "You must provide some text";
  }
  if (textInCamelCase.includes("-")) {
    return "The text contains dashes";
  }
  if (textInCamelCase.includes("_")) {
    return "The text contains underscores";
  }
  if (textInCamelCase[0] !== textInCamelCase[0].toLowerCase()) {
    return "The text starts with a capital letter";
  }
  return textInCamelCase
    .split("")
    .map((letter) => {
      if (letter !== letter.toLowerCase()) {
        return `_${letter.toLowerCase()}`;
      }
      return letter;
    })
    .join("");
};

describe("Given the function camelCaseToSnakeCase", () => {
  describe("When it recieves 'gitAdd'", () => {
    test("Then we expect 'git_add'", () => {
      const camelText = "gitAdd";
      const expectText = "git_add";

      const resultText = camelCaseToSnakeCase(camelText);

      expect(resultText).toBe(expectText);
    });
  });
  describe("When it recieves '   '", () => {
    test("Then we expect 'You must provide some text'", () => {
      const camelText = "   ";
      const expectText = "You must provide some text";

      const resultText = camelCaseToSnakeCase(camelText);

      expect(resultText).toBe(expectText);
    });
  });
  describe("When it recieves 'git-remote-add-origin'", () => {
    test("Then we expect 'The text contains dashes'", () => {
      const camelText = "git-remote-add-origin";
      const expectText = "The text contains dashes";

      const resultText = camelCaseToSnakeCase(camelText);

      expect(resultText).toBe(expectText);
    });
  });
  describe("When it recieves 'git_branch_feature'", () => {
    test("Then we expect 'The text contains underscores'", () => {
      const camelText = "git_branch_feature";
      const expectText = "The text contains underscores";

      const resultText = camelCaseToSnakeCase(camelText);

      expect(resultText).toBe(expectText);
    });
  });
  describe("When it recieves 'GitInit'", () => {
    test("Then we expect 'The text starts with a capital letter'", () => {
      const camelText = "GitInit";
      const expectText = "The text starts with a capital letter";

      const resultText = camelCaseToSnakeCase(camelText);

      expect(resultText).toBe(expectText);
    });
  });
  describe("When it recieves 'gitCheckoutFeatureFunctionTested'", () => {
    test("Then we expect 'git_checkout_feature_function_tested'", () => {
      const camelText = "gitCheckoutFeatureFunctionTested";
      const expectText = "git_checkout_feature_function_tested";

      const resultText = camelCaseToSnakeCase(camelText);

      expect(resultText).toBe(expectText);
    });
  });
});
