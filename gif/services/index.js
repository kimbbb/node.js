const Room = require('../schemas/room');
const Chat = require('../schemas/chat');

exports.removeRoom = async (roomId) => {
    try {
        await Room.deleteOne({ _id: roomId });
        await Chat.deleteMany({ room: roomId });
    } catch(err) {
        console.error(err);
        throw err;
    }
};

exports.addMember = async (roomId, member) => {
    try {
        const room = await Room.findOne({ _id: roomId });
        if(room) {
            await room.members.push(member);
            await room.save();
        }
    } catch(err) {
        console.error(err);
        throw err;
    }
};

exports.removeMember = async (roomId, member) => {
    try {
        const room = await Room.findOne({ _id: roomId });
        if(room) {
            await room.members.pull(member);
            await room.save();
        }
    } catch(err) {
        console.error(err);
        throw err;
    }
};

exports.getMembers = async (roomId) => {
    try {
        const room = await Room.findOne({ _id: roomId});
        if(room) {
            return room.members;
        } else return [];
    } catch (err) {
        console.error(err);
        throw err;
    }
};



