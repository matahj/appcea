const { RoomModel } = require('../models/Room');
const { ResourceModel } = require('../models/Resource');
const { UserModel } = require('../models/User');
const { GroupModel } = require('../models/Group');
const { RecordModel } = require('../models/Record');

const bcrypt = require('bcryptjs');
const { ActivityModel } = require('../models/Activity');

const Mutation = {

  createRoom: async (parent, { input }) => {
    const newRoom = new RoomModel({
      code: input.code,
      name: input.name,
      description: input.description
    });
    await newRoom.save();
    return newRoom;
  },

  createResource: async (parent, { input }) => {
    const newResource = new ResourceModel({
      room: input.room,
      description: input.description
    });
    await newResource.save();
    return newResource;
  },

  createUser: async (parent, { input }) => {
    const encryptedPassword = await bcrypt.hash(input.password, 10);
    const newUser = new UserModel({
      register: input.register,
      name: input.name,
      email: input.email,
      role: input.role,
      password: encryptedPassword,
      group: input.group,
    });
    await newUser.save();
    return newUser;
  },

  createGroup: async (parent, { input }) => {
    const newGroup = new GroupModel({
      code: input.code,
      language: input.language,
      semester: input.semester,
      teachers: input.teachers,
      students: input.students,
    });
    await newGroup.save();
    return newGroup;
  },

  createRecord: async (parent, { input }) => {
    const newRecord = new RecordModel({
      user: input.user,
      room: input.room,
      resource: input.resource,
      tIni: input.tIni,
      tFin: input.tFin,
      comment: input.comment,
    });
    await newRecord.save();
    return newRecord;
  },

  createActivity: async (parent, { input }) => {
    const newActivity = new ActivityModel({
      user: input.user,
      tIni: input.tIni,
      tFin: input.tFin,
    });
    await newActivity.save();
    return newActivity;
  },
  
};

module.exports = Mutation;
