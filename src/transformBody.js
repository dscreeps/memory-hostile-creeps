function transformBody(creep) {
  const body = {};
  _.each(creep.body, bodypart => {
    body[bodypart.type] = body[bodypart.type] || 0;
    ++body[bodypart.type];
  });
  return body;
}
