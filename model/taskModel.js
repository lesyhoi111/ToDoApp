import Realm from 'realm';
import React, { useState, useEffect } from 'react';


const Task = () => {
  const [realm, setRealm] = useState(null);
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
      Realm.open({
        schema: [
          {
            name: 'Task11',
            primaryKey: 'id',
            properties: {
              id: 'objectId',
              name: 'string',
              start_date: 'date',
              due_date: 'date',
              time_set: 'int',
              time_done: 'int',
              idproject: { type: 'string', optional: true },
              state: 'string',
              description: 'string',
              count_time: 'int',
              break_time: 'int',
              long_break_time: 'int',
              long_break_after: 'int',
            },
          }
        ],
        path: 'task.realm',
      }).then(realm1 => {
        console.log("a")
        setTimeout(() => {
          setRealm(realm1);
          setListTask(realm1.objects('Task11'));
        }, 1000)
      })
      return () => {
        if (realm !== null && !realm.isClosed) {
          realm.close();
        }
      };
  }, []);

  const getList = () => {

    Realm.open({
      schema: [
        {
          name: 'Task11',
          primaryKey: 'id',
          properties: {
            id: 'objectId',
            name: 'string',
            start_date: 'date',
            due_date: 'date',
            time_set: 'int',
            time_done: 'int',
            idproject: { type: 'string', optional: true },
            state: 'string',
            description: 'string',
            count_time: 'int',
            break_time: 'int',
            long_break_time: 'int',
            long_break_after: 'int',
          },
        }
      ],
    }).then(realm1 => {
      setRealm(realm1)
      setListTask(realm1.objects('Task11'));
    })
  };

  const addTask = (name, start_date, due_date, time_set, id_project, state, description, count_time, break_time, long_break_time, long_break_after) => {
    if (!realm) {
      return;
    }
    let newTask = null;
    if (id_project == "") {
      realm.write(() => {
        newTask = realm.create('Task11', {
          id: new Realm.BSON.ObjectId(),
          name: name,
          start_date: start_date,
          due_date: due_date,
          time_set: time_set,
          time_done: 0,
          // idproject: "",
          state: state,
          description: description,
          count_time: count_time,
          break_time: break_time,
          long_break_time: long_break_time,
          long_break_after: long_break_after,
        });
        // console.log(realm.objects('Task11'))
        setListTask(realm.objects('Task11'));
      });
    } else {
      realm.write(() => {
        newTask = realm.create('Task11', {
          id: new Realm.BSON.ObjectId(),
          name: name,
          start_date: start_date,
          due_date: due_date,
          time_set: time_set,
          time_done: 0,
          idproject: id_project,
          state: state,
          description: description,
          count_time: count_time,
          break_time: break_time,
          long_break_time: long_break_time,
          long_break_after: long_break_after,
        });
        setListTask(realm.objects('Task11'));
      });
    }
    return newTask;
  };

  const updateTask = (task, name, start_date, due_date, time_set, time_done, id_project, state, description, count_time, break_time, long_break_time, long_break_after) => {
    realm.write(() => {
      task.name = name,
        task.start_date = start_date,
        task.due_date = due_date,
        task.time_set = time_set,
        task.time_done = time_done,
        task.idproject = id_project,
        task.state = state,
        task.description = description,
        task.count_time = count_time,
        task.break_time = break_time,
        task.long_break_time = long_break_time,
        task.long_break_after = long_break_after,
        setListTask(realm.objects('Task11'));
    });
  };

  const deleteTask = task => {
    realm.write(() => {
      realm.delete(task);
      setListTask(realm.objects('Task11'));
    });

  };

  const closeRealm = () => {
    // if (realm !== undefined) {
      realm.close();
    // }
  };

  return {
    listTask,
    getList,
    addTask,
    updateTask,
    deleteTask,
    closeRealm
  };
};

export default Task;