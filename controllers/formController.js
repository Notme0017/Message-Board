async function renderForm(req, res) {
  res.render("form", {error: null});
};

module.exports = {renderForm}