import firebaseApp from "./firebase";

class DataRepository {
  syncDatas(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/wakeupDatas`);

    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
      console.log(value);
    });
    return () => ref.off();
  }
  saveData(userId, data) {
    firebaseApp.database().ref(`${userId}/wakeupDatas/${data.date}`).set(data);
  }
  getDatas(onUpdate) {
    const ref = firebaseApp.database().ref();
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}
export default DataRepository;
