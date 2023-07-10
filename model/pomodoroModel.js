import Realm from 'realm';
import React, { useState, useEffect } from 'react';


const Pomodoro = () => {
  const [realm, setRealm] = useState(null);
  const [listPomodoro, setListPomodoro] = useState([]);
  
  useEffect(() => {
    Realm.open({
      schema: [
        { name: 'Pomodoro',
          primaryKey: 'id',
          properties: {
            id: 'objectId',
            name: 'string',
            start_date: 'date',
            due_date: 'date',
            time_set: 'int',
            time_done: 'int',
            id_project: 'objectId',
            state: 'string',
            description: 'string'
          },
        }
      ],
    }).then(realm => {
        setRealm(realm);
        setListPomodoro(realm.objects('Pomodoro'));
    });
  }, []);

  const getList = () => {
    Realm.open({
      schema: [
        { name: 'Pomodoro',
          primaryKey: 'id',
          properties: {
            id: 'objectId',
            id_task: 'objectId',
            count_time: 'int',
            break_time: 'int',
            long_break_time: 'int',
            long_break_after: 'int',
          },
        }
      ],
    }).then(realm => {
        setListPomodoro(realm.objects('Pomodoro'));
    });
  };

  const addPomodoro = (id_task,count_time,break_time,long_break_time,long_break_after) => {
    if (!realm) {
      return;
    }
    let newPomodoro = null;
    realm.write(() => {
        newPomodoro=realm.create('Pomodoro', { 
        id: new Realm.BSON.ObjectId(),
        id_task: id_task,
        count_time: count_time,
        break_time: break_time,
        long_break_time: long_break_time,
        long_break_after: long_break_after, });
        setListPomodoro(realm.objects('Pomodoro'));
    });
    return newPomodoro;
  };

  const updatePomodoro = (pomodoro,id_task,count_time,break_time,long_break_time,long_break_after) => {
    realm.write(() => {
        pomodoro.id_task= id_task,
        pomodoro.count_time= count_time,
        pomodoro.break_time= break_time,
        pomodoro.long_break_time= long_break_time,
        pomodoro.long_break_after= long_break_after,
      setListPomodoro(realm.objects('Pomodoro'));
    });
  };

  const deletePomodoro = pomodoro => {
    realm.write(() => {
      realm.delete(pomodoro);
      setListPomodoro(realm.objects('Pomodoro'));
    });
  };

  return {
    listPomodoro,
    getList,
    addPomodoro,
    updatePomodoro,
    deletePomodoro,
  };
};

export default Pomodoro;