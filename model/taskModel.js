import Realm from 'realm';
import React, { useState, useEffect } from 'react';


const Task = () => {
  const [realm, setRealm] = useState(null);
  const [listTask, setListTask] = useState([]);
  
  useEffect(() => {
    Realm.open({
      schema: [
        { name: 'Task',
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
      console.log("a")
      setRealm(realm);
      setTimeout(()=>{
        setListTask(realm.objects('Task'));
        // console.log(realm.objects('Task'))
    },1000)
    });
  }, []);

  const getList = () => {
    Realm.open({
      schema: [
        { name: 'Task',
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
     
      setListTask(realm.objects('Task'));
    });
  };

  const addTask = (name,start_date,due_date,time_set,id_project,state,description) => {
    if (!realm) {
      return;
    }
    let newTask = null;
    realm.write(() => {
      newTask=realm.create('Task', { 
        id: new Realm.BSON.ObjectId(),
        name: name,
        start_date: start_date,
        due_date: due_date,
        time_set: time_set,
        time_done: 0,
        id_project: new Realm.BSON.ObjectId(),
        state: state,
        description: description });
      setListTask(realm.objects('Task'));
    });
    return newTask;
  };

  const updateTask = (task,name,start_date,due_date,time_set,time_done,id_project,state,description) => {
    realm.write(() => {
      task.name= name,
      task.start_date= start_date,
      task.due_date= due_date,
      task.time_set= time_set,
      task.time_done= time_done,
      task.id_project= id_project,
      task.state= state,
      task.description= description
      setListTask(realm.objects('Task'));
    });
  };

  const deleteTask = task => {
    realm.write(() => {
      realm.delete(task);
      setListTask(realm.objects('Task'));
    });
  };

  return {
    listTask,
    getList,
    addTask,
    updateTask,
    deleteTask,
  };
};

export default Task;