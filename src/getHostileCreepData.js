/*
 * const hostileCreepData = {
 *   body: { 'bodypart': 0, ... },
 *   id: 'id',
 *   owner: undefined || { username: 'username' },
 *   ticksToLive: 0
 * };
 */

function getHostileCreepData(creep) {
  const hostileCreepData = {
    body: transformBody(creep),
    id: creep.id,
    owner: { username: creep.owner.username },
    ticksToLive: creep.ticksToLive
  };
  return hostileCreepData;
}
