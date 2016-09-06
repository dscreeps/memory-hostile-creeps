function addNewHostileCreepsData(memory) {
  _.each(Game.rooms, room => {
    const roomData = memory.rooms[room.name];
    _.each(roomData.hostileCreeps, id => {
      if (memory.hostileCreeps[id]) {
        return;
      }
      memory.hostileCreeps[id] = getHostileCreepData(Game.creeps[id]);
    });
  });
}
