const CLASSROOM_SESSION_KEY = "TempClassRoom";

export default {
    storage: sessionStorage,
    classRoom: null,

    getClassRoom() {
        if (!this.classRoom) {
            var json = this.storage.getItem(CLASSROOM_SESSION_KEY);
            if (json) {
                this.classRoom = JSON.parse(json);
            }
        }
        return this.classRoom;
    },
    async setClassRoom(room, newCode) {
        this.classRoom = room;
        if (newCode) {
            this.classRoom.Code = await $api.getClassRoomCode();
        }
        this.save();
    },
    newInstance() {
        return new Promise(async (resolve, reject) => {
            this.classRoom = {
                ClassRoomID: -1,
                ClassRoomName: '',
                LessonTitle: '',
                StartTime: '',
                EndTime: '',
                Status: 0,
                HasHomeWork: true,
                HomeWorks: [],
                Lessons: [],
                Code: '',
            };
            this.classRoom.Code = await $api.getClassRoomCode();
            resolve(this.classRoom);
        })
    },
    save() {
        if (this.classRoom) {
            this.storage.setItem(CLASSROOM_SESSION_KEY, JSON.stringify(this.classRoom));
        }
    },
    isNewClassRoom() {
        return this.classRoom.ClassRoomID == -1;
    }
}