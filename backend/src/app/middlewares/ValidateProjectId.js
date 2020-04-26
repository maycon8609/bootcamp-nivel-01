const { isUuid } = require('uuidv4');

function ValidateProjectId(req, res, next) {
  const { id } = req.params;

  if(!isUuid(id)){
    return res.status(400).json({ error: 'Invalid project ID.'});
  }

  return next();
}

module.exports = ValidateProjectId;
