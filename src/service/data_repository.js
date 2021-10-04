import firebaseApp from "./firebase";

class DataRepository {
  syncWakeup(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/wakeupDatas`);

    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  syncStudy(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/studyDatas`);

    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveWakeup(userId, data) {
    firebaseApp.database().ref(`${userId}/wakeupDatas/${data.date}`).set(data);
  }
  saveStudy(userId, data) {
    firebaseApp.database().ref(`${userId}/studyDatas/${data.date}`).set(data);
  }
  getWakeup(onUpdate) {
    const ref = firebaseApp.database().ref();
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      const wakeupValue = Object.values(value).map((data) => data.wakeupDatas);

      wakeupValue && onUpdate(wakeupValue);
    });
    return () => ref.off();
  }

  getStudy(onUpdate) {
    const ref = firebaseApp.database().ref();
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      const studyValue = Object.values(value).map((data) => data.studyDatas);

      studyValue && onUpdate(studyValue);
    });
    return () => ref.off();
  }
}
export default DataRepository;
