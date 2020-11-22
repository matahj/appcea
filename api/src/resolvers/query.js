const { RoomModel } = require("../models/Room");
const { ResourceModel } = require("../models/Resource");
const { UserModel } = require("../models/User");
const { GroupModel } = require("../models/Group");
const { RegistryModel } = require("../models/Registry");
const { ActivityModel } = require("../models/Activity");

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
        return groups
    },
    registers: async () => {
        const registers = await RegistryModel.find();
        return registers;
    },
    activities: async () => {
        const activities = await ActivityModel.find();
        return activities;
    }


};

module.exports = Query; 