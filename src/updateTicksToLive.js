function updateTicksToLive(memory) {
  _.each(memory.hostileCreeps, hostileCreepData => {
    --hostileCreepData.ticksToLive;

  });
  memory.hostileCreeps = _.filter(memory.hostileCreeps, hostileCreepData => hostileCreepData.ticksToLive > 0);
}
