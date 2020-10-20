const { RoomModel } = require('../models/Room');
const { ResourceModel } = require('../models/Resource');
const { UserModel } = require('../models/User');
const { GroupModel } = require('../models/Group');
const { RecordModel } = require('../models/Record');

const Query = {

  status: () => {
    return `Welcome to GraphQL`;
  },

  rooms: async () => {
    const rooms = await RoomModel.find();
    return rooms;
  },

  resources: async () => {
    const resources = await ResourceModel.find();
    return resources;
  },

  users: async () => {
    const users = await UserModel.find();
    return users;
  },

  groups: async () => {
    const groups = await GroupModel.find();
    return groups;
  },

  records: async () => {
    const records = await RecordModel.find();
    return records;
  },
  
};

module.exports = Query;