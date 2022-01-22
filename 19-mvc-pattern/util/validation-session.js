function getSessionErrorData(req, defaultValues) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      ...defaultValues,
    };
  }

  req.session.inputData = null;
}

function flashErrorsToSession(req, data, acton) {
  req.session.sessionInputData = {
    hasError: true,
    ...data,
  };
  req.session.save(acton);
}

module.exports = {
  getSessionErrorData: getSessionErrorData,
  flashErrorsToSession: flashErrorsToSession,
};
