function addNewHostileCreepsData(memory) {
  const hostileCreeps = _.filter(Game.creeps, creep => !creep.my);
  _.each(hostileCreeps, creep => {
    if (memory.hostileCreeps[creep.id]) {
      return;
    }
    memory.hostileCreeps[creep.id] = getHostileCreepData(creep);
  });
}
