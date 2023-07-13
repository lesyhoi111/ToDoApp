import Realm from 'realm';
import React, { useState, useEffect } from 'react';


const Project = () => {
  const [realm, setRealm] = useState(null);
  const [listProject, setListProject] = useState([]);
  
  useEffect(() => {
    Realm.open({
      schema: [
        { name: 'Project',
          primaryKey: 'id',
          properties: {
            id: 'objectId',
            project_name: 'string',
            start_date: 'date',
            due_date: 'date',
          },
        }
      ],
      path: 'project.realm',
    }).then(realm => {
        setRealm(realm);
        setListProject(realm.objects('Project'));
    });
    return () => {
      if (realm !== null && !realm.isClosed) {
        realm.close();
      }
    };
  }, []);

  const getList = () => {
    Realm.open({
        schema: [
            { name: 'Project',
              primaryKey: 'id',
              properties: {
                id: 'objectId',
                project_name: 'string',
                start_date: 'date',
                due_date: 'date',
              },
            }
          ],
        }).then(realm => {
            setListProject(realm.objects('Project'));
    });
  };

  const addProject = (name,start_date,due_date) => {
    if (!realm) {
      return;
    }
    let newProject = null;
    realm.write(() => {
        newProject=realm.create('Project', { 
        id: new Realm.BSON.ObjectId(),
        project_name: name,
        start_date: start_date,
        due_date: due_date,
       });
      setListProject(realm.objects('Project'));
    });
    return newProject;
  };

  const updateProject = (project,name,start_date,due_date) => {
    realm.write(() => {
        project.name= name,
        project.start_date= start_date,
        project.due_date= due_date,
        setListProject(realm.objects('Project'));
    });
  };

  const deleteProject = project => {
    realm.write(() => {
      realm.delete(project);
      setListProject(realm.objects('Project'));
    });
  };

  return {
    listProject,
    getList,
    addProject,
    updateProject,
    deleteProject,
  };
};

export default Project;